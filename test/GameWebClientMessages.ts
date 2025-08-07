import type { RootObject as Receive } from "./receive_types.ts";
import type { RootObject as Send } from "./send_types.ts";
export type GameWebClientMessages = {
  [K in keyof Receive]: { messageType: K; payload: Receive[K] };
}[keyof Receive];
export type GameClientCommands = {
  [K in keyof Send]: { message: K; payload: Send[K] };
}[keyof Send];
