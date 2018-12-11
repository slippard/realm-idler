"use strict";
var _this = this;
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var mongoose = require("mongoose");
var player_1 = require("./schemas/player");
mongoose.connect('mongodb://client:Mudkip000@ds133814.mlab.com:33814/realm-idler', { useNewUrlParser: true });
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        electron_1.ipcMain.on('starting-game', function (event, arg) {
            _this.createChar(event, arg);
        });
        this.createWindow();
    }
    Main.prototype.createChar = function (event, name) {
        player_1["default"].findOne({ name: name }, function (err, doc) {
            if (err) {
                console.log('Error: ' + err);
            }
            else if (!doc) {
                var character = new player_1["default"]();
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
                    if (err) {
                        console.log(err);
                    }
                    else
                        console.log('New character created: ' + name);
                });
                // event.sender.send('createdchar', character)
            }
            else {
                player_1["default"].updateOne({ name: name }, { $inc: { turns: 1 } }).then(function () { return console.log(doc.name + ' new turn +1'); });
            }
        });
    };
    Main.prototype.createWindow = function () {
        var _this = this;
        this.mainWindow = new electron_1.BrowserWindow({
            height: 400,
            width: 350,
            resizable: false,
            autoHideMenuBar: true
        });
        this.mainWindow.loadFile(path.join(__dirname, "../index.html"));
        this.mainWindow.webContents.openDevTools();
        this.mainWindow.on("closed", function () {
            _this.mainWindow = null;
        });
    };
    return Main;
}());
electron_1.app.on("ready", function () { new Main(); });
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (_this.mainWindow === null) {
        _this.createWindow();
    }
});
