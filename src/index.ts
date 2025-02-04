import { WebSocketServer } from "ws";
import { WarControl } from "./warControl.ts";
import { getInstallLocation } from "./setup.ts";
import type { RootObject as SendCommands } from "./../test/send_types.ts";
import type { RootObject as ReceiveData } from "./../test/receive_types.ts";

export class WC3API {
  webUiServer = new WebSocketServer({ port: 8888 });
  gameWebsocket: WebSocket | null = null;
  gameServerUrl: string = "";
  onMessage: (data: ReceiveData) => void = () => {};

  constructor(onMessage: (data: ReceiveData) => void) {
    this.webUiServer.on("connection", (ws) => {
      ws.on("error", console.error);

      ws.on("message", (data) => {
        const parsedData = JSON.parse(data.toString()) as {
          messageType: "info" | "state" | "clientWebSocket";
          payload: any;
        };
        if (parsedData.messageType === "clientWebSocket") {
          this.gameServerUrl = parsedData.payload;
          console.log("Connecting to game server", this.gameServerUrl);
          this.gameWebsocket = new WebSocket(this.gameServerUrl);
          this.gameWebsocket.onmessage = async (msg) => {
            this.onMessage(JSON.parse(msg.data.toString()) as ReceiveData);
          };
        } else if (parsedData.messageType === "info") {
          console.log(parsedData.payload);
        } else if (parsedData.messageType !== "state") {
          console.log(parsedData.messageType);
        }
      });
    });
    this.onMessage = onMessage;
  }

  commandSocket(command: SendCommands) {
    if (this.gameWebsocket) {
      this.gameWebsocket.send(JSON.stringify(command));
      return "";
    }
    return "No game websocket found";
  }
}

const ctrl = new WarControl(await getInstallLocation());

console.log(await ctrl.openWarcraft("Asia"));
