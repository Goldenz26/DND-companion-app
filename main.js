const { app, BrowserWindow, ipcMain } = require("electron");
const { join } = require("path");
const { title } = require("process");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      preload: join(__dirname, "./preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile("index.html");
};

const createinputWindow = () =>{
const win = new BrowserWindow({
    width:400,height:400,


    
})
win.loadFile("inputwindow.html");
}


app.whenReady().then(() => {
  createWindow();
});