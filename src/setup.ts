import { promisified as regedit } from "regedit";
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";
import { readdir, copyFile } from "node:fs/promises";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export async function setEnableWebUi(enable: boolean) {
  await regedit.putValue({
    "HKCU\\SOFTWARE\\Blizzard Entertainment\\Warcraft III": {
      "Allow Local Files": {
        value: enable ? 0x00000001 : 0x00000000,
        type: "REG_DWORD",
      },
    },
  });
}

export async function copyWebUiFiles(installLocation: string) {
  const webUiFiles = await readdir(join(__dirname, "..", "assets"));
  const promises: Promise<void>[] = [];
  for (const file of webUiFiles) {
    promises.push(
      copyFile(
        join(__dirname, "..", "assets", file),
        join(installLocation, "\\_retail_\\webui", file)
      )
    );
  }
  const finished = await Promise.allSettled(promises);
  if (finished.some((result) => result.status === "rejected")) {
    throw new Error(
      `Failed to copy ${
        finished.filter((f) => f.status === "rejected").length
      } webui files`
    );
  }
}

export async function getInstallLocation() {
  const regInstallKey =
    "HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Warcraft III";
  const backupRegInstallKey =
    "HKLM\\SOFTWARE\\WOW6432Node\\Blizzard Entertainment\\Warcraft III\\Capabilities";
  let installLocation = "";
  let listResult = (await regedit.list([regInstallKey]))[regInstallKey];
  if (!listResult.exists) {
    installLocation = listResult.values["InstallLocation"]?.value?.toString();
  } else {
    listResult = (await regedit.list([backupRegInstallKey]))[
      backupRegInstallKey
    ];
    installLocation = listResult.values["ApplicationIcon"]?.value
      ?.toString()
      ?.slice(1, -36);
  }
  if (!installLocation) {
    throw new Error("Warcraft III installation directory value not found");
  }
  return installLocation;
}
