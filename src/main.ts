import { app, BrowserWindow } from "electron";
import { Game } from './game';
import * as path from "path";

class Main {
  public mainWindow: Electron.BrowserWindow;
  constructor() {
    this.createWindow();
    new Game();
  }

  private createWindow(){
    this.mainWindow = new BrowserWindow({
      height: 400,
      width: 350,
      resizable: false,
      autoHideMenuBar: true
    });
  
    this.mainWindow.loadFile(path.join(__dirname, "../index.html"));
  
    this.mainWindow.webContents.openDevTools();
  
    this.mainWindow.on("closed", () => {
      this.mainWindow = null;
    });
  }
}

app.on("ready", () => { new Main() });

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (this.mainWindow === null) {
    this.createWindow();
  }
});
