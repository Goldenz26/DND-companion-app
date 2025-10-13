const { app, BrowserWindow, ipcMain } = require("electron");
const { join } = require("path");
const { title } = require("process");

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
  const inputwindow = new BrowserWindow({
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

//IPC here

ipcMain.on("openchildwindow", () => {
  createinputWindow();
});

app.whenReady().then(() => {
  createWindow();
});
