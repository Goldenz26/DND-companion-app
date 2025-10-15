const { app, BrowserWindow, ipcMain, webContents } = require("electron");
const { join } = require("path");
const { title } = require("process");

let inputwindow;
let mainwindow;

const createWindow = () => {
  mainwindow = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      preload: join(__dirname, "./preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainwindow.loadFile("index.html");
};

const createinputWindow = () => {
  inputwindow = new BrowserWindow({
    width: 400,
    height: 400,
    parent: mainwindow,
    webPreferences: {
      preload: join(__dirname, "./preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  inputwindow.loadFile("inputwindow.html");
};
app.whenReady().then(() => {
  createWindow();
});

////////////////////////////////////////////////////IPC here

ipcMain.on("openchildwindow", () => {
  createinputWindow();
});

ipcMain.on("closechildwindow", () => {
  inputwindow.close();
});
//listening for data from the input window renderer
ipcMain.on("senddata", (event, data) => {
  console.log("Main got send this data: ", data);
  //sends data to the main screen renderer
  mainwindow.webContents.send("recievedata", data);
});

//////////////////////////////////////////////////////
