const { ipcRenderer, contextBridge } = require("electron");

const WINDOW_API = {
  openchildwindow: () => ipcRenderer.send("openchildwindow"),
  closechildwindow: () => ipcRenderer.send("closechildwindow"),
  opendicewindow: () => ipcRenderer.send("opendicewindow"),
  closedicewindow: () => ipcRenderer.send("closedicewindow"),
  opennpcwindow: () => ipcRenderer.send("opennpcwindow"),
  closenpcwindow: () => ipcRenderer.send("closenpcwindow"),
  senddata: (data) => ipcRenderer.send("senddata", data),
  recievedata: (callback) =>
    ipcRenderer.on("recievedata", (_, data) => callback(data)),
};

contextBridge.exposeInMainWorld("api", WINDOW_API);
