import {
  screen,
  windowWithTitle,
  mouse,
  centerOf,
  Button,
} from "@nut-tree/nut-js";
import { useBolt } from "@nut-tree/bolt";
import "@nut-tree/element-inspector";
import {
  windowElementDescribedBy,
  elements,
} from "@nut-tree/element-inspector/win";
import { exec } from "child_process";
import { promisify } from "util";
const runCmd = promisify(exec);

useBolt();

interface ReturnData {
  error?: string;
}

interface State {
  battleNetOpen: Promise<boolean>;
  battleNetVisible: Promise<boolean>;
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
    get battleNetVisible() {
      return checkWindowVisible("Battle.net");
    },
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

  async openWarcraft(region?: WarcraftRegions): Promise<ReturnData> {
    if (this.state.openingWarcraft === true)
      return { error: "Already opening Warcraft" };
    if (!(await this.state.battleNetVisible)) {
      const openBattleNet = await this.openBattleNet();
      if (openBattleNet.error) return openBattleNet;
    }
    this.state.openingWarcraft = true;
    this.setCurrentAction("openingWarcraft");
    var retError: string | undefined = undefined;
    try {
      const { error } = await this.openWarcraftAction(region);
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

  async clickPlay(region?: WarcraftRegions): Promise<ReturnData> {
    if (this.state.clickingPlay === true)
      return { error: "Action clicking play" };
    this.setCurrentAction("clickingPlay");
    this.state.clickingPlay = true;
    var retError: string | undefined = undefined;
    try {
      const { error } = await this.clickPlayAction(region);
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
    while (tries < overRides.maxTries && !(await this.state.battleNetVisible)) {
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

  private async openWarcraftAction(
    region?: WarcraftRegions,
    overRides = { maxTries: 20, delay: 250 }
  ) {
    let tries = 0;
    const clickPlay = await this.clickPlay(region);
    if (clickPlay.error) return clickPlay;
    while (tries < overRides.maxTries && !(await this.state.warcraftOpen)) {
      tries++;
      await sleep(overRides.delay);
    }
    return tries < overRides.maxTries
      ? {}
      : { error: "Failed to open Warcraft" };
  }

  private async clickPlayAction(region?: WarcraftRegions): Promise<ReturnData> {
    const battleNetWindow = await screen.find(windowWithTitle(/Battle\.net/));
    await battleNetWindow.focus();
    await battleNetWindow.move({ x: 0, y: 0 });
    await sleep(100);
    const findCloseNews = await battleNetWindow.findAll(
      windowElementDescribedBy({ title: "Close", type: "Button" })
    );
    if (findCloseNews[0]?.region) {
      await mouse.setPosition(await centerOf(findCloseNews[0]?.region));
      await mouse.leftClick();
    }

    if (region) {
      this.setCurrentAction("changingRegion");
      const changeRegionButton = await battleNetWindow.find(
        elements.menuItem({ title: "Regions", role: "widget" })
      );
      if (!changeRegionButton.region)
        return { error: "Change region button not found" };

      await mouse.setPosition(await centerOf(changeRegionButton.region));
      await mouse.leftClick();
      await sleep(100);

      try {
        const regionButtons = await battleNetWindow.find(
          elements.menuItem({
            id: new RegExp(/DropdownMenu/, "g"),
            type: "MenuItem",
            role: "menuitem",
            title: region,
          })
        );
        console.log("finding regions");

        if (!regionButtons?.region) return { error: "Region button not found" };
        await mouse.setPosition(await centerOf(regionButtons.region));
        await mouse.leftClick();
      } catch (e) {
        console.log("finding regions2");

        return { error: ("Error finding region buttons: " + e) as string };
      }
    }

    const playButton = await battleNetWindow.find(
      windowElementDescribedBy({ id: "play-btn-main" })
    );
    if (playButton.region == null) return { error: "Play button not found" };

    await mouse.setPosition(centerOf(playButton.region));
    await mouse.click(Button.LEFT);

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

async function checkWindowVisible(
  windowName: RegExp | string
): Promise<boolean> {
  console.log("Checking window visible", windowName);
  try {
    await screen.find(windowWithTitle(windowName));
    return true;
  } catch (error) {
    return false;
  }
}
