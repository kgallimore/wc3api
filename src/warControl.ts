import { exec, execFile } from "child_process";
import { promisify } from "util";
import { __dirname } from "./index.ts";
import { join } from "path";
const runCmd = promisify(exec);
const runFile = promisify(execFile);

interface ReturnData {
  error?: string;
}

interface State {
  battleNetOpen: Promise<boolean>;
  warcraftOpen: Promise<boolean>;
  openingBattleNet: boolean;
  openingWarcraft: boolean;
  clickingPlay: boolean;
  currentAction:
    | "none"
    | "openingWarcraft"
    | "openingBattleNet"
    | "clickingPlay"
    | "changingRegion";
}

export type WarcraftRegions = "Americas" | "Europe" | "Asia";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class WarControl {
  state: State = {
    get battleNetOpen() {
      return checkProcessRunning("Battle.net.exe");
    },
    get warcraftOpen() {
      return checkProcessRunning("Warcraft III.exe");
    },
    openingBattleNet: false,
    openingWarcraft: false,
    clickingPlay: false,
    currentAction: "none",
  };
  warInstallLoc: string;

  constructor(warInstallLoc: string) {
    this.warInstallLoc = warInstallLoc;
  }

  async openWarcraft(): Promise<ReturnData> {
    if (this.state.openingWarcraft === true)
      return { error: "Already opening Warcraft" };
    if (!(await this.state.battleNetOpen)) {
      const openBattleNet = await this.openBattleNet();
      if (openBattleNet.error) return openBattleNet;
    }
    this.state.openingWarcraft = true;
    this.setCurrentAction("openingWarcraft");
    var retError: string | undefined = undefined;
    try {
      const { error } = await this.openWarcraftAction();
      retError = error;
    } catch (e) {
      retError = e as string;
    }
    this.state.openingWarcraft = false;
    this.setCurrentAction("none");
    return retError ? { error: retError } : {};
  }

  async openBattleNet(): Promise<ReturnData> {
    if (this.state.openingBattleNet === true)
      return { error: "Already opening Battle.Net" };
    this.setCurrentAction("openingBattleNet");
    this.state.openingBattleNet = true;
    var retError: string | undefined = undefined;
    try {
      const { error } = await this.openBattleNetAction();
      retError = error;
    } catch (e) {
      retError = e as string;
    }
    this.setCurrentAction("none");
    this.state.openingBattleNet = true;
    return retError ? { error: retError } : {};
  }

  async clickPlay(): Promise<ReturnData> {
    if (this.state.clickingPlay === true)
      return { error: "Action clicking play" };
    this.setCurrentAction("clickingPlay");
    this.state.clickingPlay = true;
    var retError: string | undefined = undefined;
    try {
      const { error } = await this.clickPlayAction();
      retError = error;
    } catch (e) {
      retError = e as string;
    }
    this.setCurrentAction("none");
    this.state.clickingPlay = false;
    return retError ? { error: retError } : {};
  }

  private async openBattleNetAction(
    overRides = { maxTries: 20, delay: 250 }
  ): Promise<ReturnData> {
    overRides;
    let tries = 0;
    while (tries < overRides.maxTries && !(await this.state.battleNetOpen)) {
      tries++;
      if (tries % 2)
        await runCmd(
          `"${this.warInstallLoc}\\_retail_\\x86_64\\Warcraft III.exe"`
        );
      await sleep(overRides.delay);
    }
    return tries < overRides.maxTries
      ? {}
      : { error: "Failed to open Battle.Net" };
  }

  private async openWarcraftAction(overRides = { maxTries: 20, delay: 250 }) {
    let tries = 0;
    const clickPlay = await this.clickPlay();
    if (clickPlay.error) return clickPlay;
    while (tries < overRides.maxTries && !(await this.state.warcraftOpen)) {
      tries++;
      await sleep(overRides.delay);
    }
    return tries < overRides.maxTries
      ? {}
      : { error: "Failed to open Warcraft" };
  }

  private async clickPlayAction(): Promise<ReturnData> {
    runFile(join(__dirname, "..", "assets", "win-api-rs.exe"));
    return {};
  }

  private setCurrentAction(newAction: State["currentAction"]) {
    console.log("Setting current action to", newAction);
    this.state.currentAction = newAction;
  }
}
async function checkProcessRunning(processName: string) {
  const { stdout, stderr } = await runCmd(
    `tasklist /NH /FI "STATUS eq RUNNING" /FI "USERNAME ne N/A" /FI "IMAGENAME eq ${processName}"`
  );
  if (stderr) {
    return false;
  } else {
    if (stdout.includes(processName)) {
      return true;
    } else {
      return false;
    }
  }
}
