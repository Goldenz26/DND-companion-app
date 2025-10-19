const { KeyObject } = require("crypto");
const { app, BrowserWindow, ipcMain, webContents } = require("electron");
const { type } = require("os");
const { join } = require("path");
const { title } = require("process");
const { Z_NO_COMPRESSION } = require("zlib");
const Database = require("better-sqlite3");
const db = new Database("./database/dndcomp.db");
let currentcamp;
let inputwindow;
let mainwindow;
let dicewindow;
let npcwindow;
let npcinputwindow;
//declaring the schema here

//////////////////////////////////////////////
//window declarations here

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
const createdicewindow = () => {
  dicewindow = new BrowserWindow({
    width: 400,
    height: 400,
    parent: mainwindow,
    webPreferences: {
      preload: join(__dirname, "./preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  dicewindow.loadFile("./dice.html");
};
const createnpcwindow = () => {
  npcwindow = new BrowserWindow({
    width: 400,
    height: 400,
    parent: mainwindow,
    webPreferences: {
      preload: join(__dirname, "./preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  npcwindow.loadFile("./npc.html");
};
const createnpcinputwindow = () => {
  npcinputwindow = new BrowserWindow({
    width: 400,
    height: 400,
    parent: mainwindow,
    webPreferences: {
      preload: join(__dirname, "./preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  npcinputwindow.loadFile("./npcinput.html");
};
app.whenReady().then(() => {
  createWindow();
});

////////////////////////////////////////////////////IPC here
ipcMain.on("opennpcwindow", () => {
  createnpcwindow();
});

ipcMain.on("closedicewindow", () => {
  npcwindow.close();
});

ipcMain.on("opendicewindow", () => {
  createdicewindow();
});

ipcMain.on("closedicewindow", () => {
  dicewindow.close();
});
ipcMain.on("opennpcinputwindow", () => {
  createnpcinputwindow();
});

ipcMain.on("closenpcinputwindow", () => {
  npcinputwindow.close();
});

ipcMain.on("openchildwindow", () => {
  createinputWindow();
});

ipcMain.on("closechildwindow", () => {
  inputwindow.close();
});
//listening for data from the input window renderer
ipcMain.on("senddata", (event, data) => {
  console.log("Main got send this data: ", data);

  db.run("INSERT OR IGNORE INTO campaign (Cname) VALUES(?)").run(data);
  console.log("Campaign saved successfully!");

  //sends data to the main screen renderer
  mainwindow.webContents.send("recievedata", data);
});
ipcMain.handle("get_storage_Cname", () => {
  const rows = db.prepare("SELECT * FROM campaign").all();
  return rows;
});

ipcMain.on("set_current_camp", (event, nameofcamp) => {
  currentcamp = nameofcamp;
});

ipcMain.handle("get_current_camp", async (event, args) => {
  return currentcamp;
});
