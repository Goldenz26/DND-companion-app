const { app, BrowserWindow, ipcMain, webContents } = require("electron");
const { type } = require("os");
const { join } = require("path");
const { Z_NO_COMPRESSION } = require("zlib");
const Store = require("electron-store").default;
let inputwindow;
let mainwindow;
let dicewindow;
let npcwindow;
//declaring the schema here
const schema = {
  Cname: {
    type: String,
    default: "",
  },
  NPC: {
    type: Object,
    properties: {
      firstname: { type: String, default: "" },
      lastname: { type: String, default: "" },
    },
    default: {},
  },
};
//////////////////////////////////////////////
//window declarations here
const storage = new Store(schema);

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

ipcMain.on("openchildwindow", () => {
  createinputWindow();
});

ipcMain.on("closechildwindow", () => {
  inputwindow.close();
});
//listening for data from the input window renderer
ipcMain.on("senddata", (event, data) => {
  console.log("Main got send this data: ", data);

  storage.set("Cname", data);
  console.log("in storage: ", storage.get("Cname"));

  //sends data to the main screen renderer
  mainwindow.webContents.send("recievedata", data);
});

//////////////////////////////////////////////////////
