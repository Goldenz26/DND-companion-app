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
    ipcRenderer.on("recievedata", (event, data) => callback(data)),

  get_storage_Cname: () => ipcRenderer.invoke("get_storage_Cname"),

  set_current_camp: (nameofcamp) =>
    ipcRenderer.send("set_current_camp", nameofcamp),
  get_current_camp: () => ipcRenderer.invoke("get_current_camp"),
  opennpcinputwindow: () => ipcRenderer.send("opennpcinputwindow"),
  closenpcinputwindow: () => ipcRenderer.send("closenpcinputwindow"),
};

contextBridge.exposeInMainWorld("api", WINDOW_API);
