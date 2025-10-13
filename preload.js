const { ipcRenderer, contextBridge } = require("electron");

const WINDOW_API = {
  openchildwindow: () => ipcRenderer.send("openchildwindow"),
};

contextBridge.exposeInMainWorld("api", WINDOW_API);
