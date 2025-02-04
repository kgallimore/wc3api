import { WebSocketServer } from "ws";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import cors from "@fastify/cors";

import { copyWebUiFiles, getInstallLocation } from "./../src/setup.ts";

import toTs from "json-to-ts";
import Fastify from "fastify";

type DataTypes = "send" | "receive";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let gameWebsocket: WebSocket | null = null;

const fastify = Fastify({
  logger: false,
});
await fastify.register(cors, {
  origin: "*",
});
fastify.post("/", async function handler(request, reply) {
  const data = JSON.parse(request.body as string) as {
    type: string;
    message: string;
    payload: any;
  };
  if (data.type != "webui") {
    console.log("Invalid type", data.type, data.message);
    return "";
  }
  if (msgJson.send[data.message] == null) {
    msgJson.send[data.message] = data.payload;
    await saveJson("send");
  }
  reply.send("");
});

await copyWebUiFiles(await getInstallLocation());

var testFileData: Record<DataTypes, string> = { send: "", receive: "" };
interface AtomicLock {
  locked: boolean;
  timeout: NodeJS.Timeout | null;
}
let atomicWrite: { receive: AtomicLock; send: AtomicLock } = {
  receive: { locked: false, timeout: null },
  send: { locked: false, timeout: null },
};
for (const type of Object.keys(testFileData) as Array<
  keyof typeof testFileData
>) {
  try {
    testFileData[type] = await readFile(
      join(__dirname, type + ".json"),
      "utf-8"
    );
  } catch (e) {
    await writeFile(join(__dirname, type + ".json"), "{}");
    testFileData[type] = await readFile(
      join(__dirname, type + ".json"),
      "utf-8"
    );
  }
}
const msgJson: Record<DataTypes, { [key: string]: any }> = {
  send: JSON.parse(testFileData.send),
  receive: JSON.parse(testFileData.receive),
};

const webUiServer = new WebSocketServer({ port: 8888 });

webUiServer.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    const parsedData = JSON.parse(data.toString()) as {
      messageType: "info" | "state" | "clientWebSocket";
      payload: any;
    };
    if (parsedData.messageType === "clientWebSocket") {
      initWebsocket(parsedData.payload);
    } else if (parsedData.messageType === "info") {
      console.log(parsedData.payload);
    } else if (parsedData.messageType !== "state") {
      console.log(parsedData.messageType);
    }
  });
});

try {
  await fastify.listen({ port: 8787 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

function initWebsocket(url: string) {
  console.log("Connecting to " + url);
  gameWebsocket = new WebSocket(url);
  gameWebsocket.onmessage = async (msg) => {
    const json = JSON.parse(msg.data.toString()) as {
      messageType: string;
      payload: { [key: string]: any };
    };
    if (msgJson.receive[json.messageType] == null) {
      msgJson.receive[json.messageType] = json.payload;
      await saveJson("receive");
    }
  };
}

async function saveJson(type: DataTypes) {
  if (atomicWrite[type].locked) {
    if (atomicWrite[type].timeout) clearTimeout(atomicWrite[type].timeout);
    atomicWrite[type].timeout = setTimeout(() => saveJson, 100);
    return;
  }
  atomicWrite[type].locked = true;
  await writeFile(
    join(__dirname, type + ".json"),
    JSON.stringify(msgJson[type], null, 2),
    { flag: "w" }
  );
  await writeFile(
    join(__dirname, type + "_types.ts"),
    toTs.default(msgJson[type]),
    {
      flag: "w",
    }
  );
  atomicWrite[type].locked = false;
  atomicWrite[type].timeout = null;
}
