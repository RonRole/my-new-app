// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer, contextBridge } from "electron";
import { IPCKeys } from "./constants";

// ipcMain.handleとipcRenderer.invokeは対になる
contextBridge.exposeInMainWorld("sampleAPI", {
  openDialog: () => ipcRenderer.invoke(IPCKeys.OPEN_DIALOG),
});
