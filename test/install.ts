import { copyWebUiFiles, getInstallLocation } from "../src/setup.ts";
await copyWebUiFiles(await getInstallLocation());
