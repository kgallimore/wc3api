import * as api from "win32-api/util";

const test = await api.FindWindowEx(0, 0, "Battle.net", null);
console.log(test);
