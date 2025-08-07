"use strict";
let webSocket: WebSocket | null;
let clientWS: WebSocket | null;
import type {
  GameWebClientMessages,
  GameClientCommands,
} from "./../test/GameWebClientMessages";

const state = {
  selfRegion: "",
  selfBattleTag: "",
  menuState: "LOGIN_DOORS",
  screenState: "",
  inGame: false,
};

const version = "1.3.0";
let qs;
let guid: string | null = null;
let currentLog = "";
const logContainer = document.getElementById("logContainer");
function addLog(text: string, error = false) {
  if (text === currentLog) {
    return;
  }
  currentLog = text;
  if (logContainer) logContainer.innerText = text;
}
setup();
function setup() {
  qs = new URLSearchParams(window.location.search);
  guid = qs.get("guid");
  wsSetup();
  clientWSSetup();
}
function clientWSSetup() {
  if (guid) {
    clientWS = new WebSocket("ws://" + location.host + "/webui-socket/" + guid);
    clientWS.onmessage = function (event) {
      const message = JSON.parse(event.data) as GameWebClientMessages;
      if (message.messageType === "SetGlueScreen") {
        if (
          state.menuState === "LOADING_SCREEN" &&
          message.payload.screen === "SCORE_SCREEN"
        ) {
          state.inGame = true;
        } else {
          state.inGame = false;
        }
        state.menuState = message.payload.screen;
      } else if (message.messageType === "UpdateUserInfo") {
        state.selfBattleTag = message.payload.user.battleTag;
        state.selfRegion = message.payload.user.userRegion;
      }
      //  else if (
      //   message.messageType === "ChatMessage" &&
      //   message.payload.message.sender &&
      //   message.payload.message.source === "gameChat"
      // ) {
      //   clientSend({
      //     message: "PlaySound",
      //     payload: { sound: "MenuButtonClick" },
      //   });
      // }
    };
    clientWS.onopen = function (_event) {
      sendSocket("info", "Webui Connected!");
      clientWS!.onclose = function (_event) {
        sendSocket("info", "clientWS closed");
      };
      clientWS!.onerror = function (event) {
        sendSocket("info", "clientWS error");
        sendSocket("info", event);
      };
    };
  }
}
function clientSend(message: GameClientCommands) {
  if (clientWS && clientWS.readyState === 1) {
    addLog("Sending message to clientWS:" + JSON.stringify(message));
    clientWS.send(JSON.stringify(message));
  }
}
function wsSetup() {
  webSocket = new WebSocket("ws://127.0.0.1:8888");
  webSocket.onopen = function (_event) {
    if (webSocket?.readyState !== 1) {
      return;
    }
    sendSocket(
      "info",
      "Game Client Connected. Hello! I am version: " + version
    );
    addLog("WC3-API Connected");
    if (state) {
      sendSocket("state", state);
    }
    if (guid !== "") {
      sendSocket(
        "clientWebSocket",
        "ws://" + location.host + "/webui-socket/" + guid
      );
    } else {
      sendSocket("info", "There was an issue in getting game socket address!");
    }
    sendSocket(
      "info",
      (
        document.querySelector(
          "script[src='gluemanager.js']"
        ) as HTMLScriptElement
      ).src
    );
  };
  webSocket.onclose = function (_event) {
    addLog("WC3-API Closed", true);
    window.setTimeout(wsSetup, 5000);
  };
  webSocket.onerror = function (_event) {
    if (currentLog !== "WC3-API Closed") {
      addLog("WC3-API Error", true);
    }
  };
  webSocket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    switch (data.messageType) {
      default:
        sendSocket("echo", event.data);
        break;
    }
  };
}
function sendSocket(
  messageType = "info",
  payload: { [key: string]: any } | string
) {
  if (webSocket) {
    if (webSocket.OPEN) {
      webSocket.send(JSON.stringify({ messageType, payload }));
    } else if (webSocket.CONNECTING) {
      setTimeout(() => {
        sendSocket(messageType, payload);
      }, 100);
    }
  }
}
