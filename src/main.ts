import { app, BrowserWindow, ipcMain } from "electron";
import * as fs from 'fs';
import * as path from "path";
import * as mongoose from 'mongoose';
import DPlayer, { IPlayer } from './schemas/player';
import { url } from "inspector";

mongoose.connect('mongodb://client:Mudkip000@ds133814.mlab.com:33814/realm-idler', { useNewUrlParser: true });

class Main {
  public mainWindow: Electron.BrowserWindow;
  constructor() {

    ipcMain.on('starting-game', (event: any, arg: string) => {
      this.createChar(event, arg);
    })
    this.createWindow();
    
  }

  private createChar(event: any, name: string) {
    DPlayer.findOne({ name: name }, function (err, doc) {
      if (err) {
        console.log('Error: ' + err);
      } else if (!doc) {
        let character = new DPlayer();
        character.name = name;
        character.turns = 0;
        character.fame = 0;
        character.gold = 0;
        character.xp = 0;
        character.level = 1;
        character.hp = 100;
        character.atk = 12;
        character.def = 0;
        character.spd = 10;
        character.dex = 15;
        character.vit = 12;
        character.wis = 12;
        character.save(function (err) {
          if (err) {console.log(err) }
          else console.log('New character created: ' + name);
        })
        // event.sender.send('createdchar', character)
      } else {
        DPlayer.updateOne({ name: name }, { $inc: { turns: 1 } }).then(function () { return console.log(doc.name + ' new turn +1') })
      }
    })
  }

  private createWindow() {
    this.mainWindow = new BrowserWindow({
      height: 400,
      width: 350,
      resizable: false,
      icon: './src/media/wizard.png',
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
