# Realm Idler

Realm Idler is a simple electron game based on [Realm of the Mad God](http://realmofthemadgod.com).

### Build & run locally

```sh
$ git clone git@github.com:slippard/realm-idler.git
$ cd ./realm-idler/
$ npm install
$ npm start
```

### How to Play 
After downloading & running the game, you will be asked to input a character name. Currently, all connected clients share the same database collection, and any client can load any character. Choose a name and click start. 

### Building & Compiling

This game is currently in its very early stages and as such, I will not be including builds for each system as of yet. To build for your local machine, use the commands below.

| NAME | SCRIPTS | DESC |
| ------ | ------ | ------ |
| Start | `$ npm start` | Compile & run |
| Watch | `$ npm run-script watch` | Log `tsc -w` output |
| Linux | `$ npm run-script build-deb` | Compile to `.deb` |
| Windows | `$ npm run-script package-win` | Compile `.exe` |
| Mac | `$ npm run-script package-host` |  Compiles `.app` |

### Todos
- Desktop Alerts for Events and death
- HP bar for player & enemies
- Character slots
- Items as drops & shop items
- Shop with items costing Gold and bonuses costing fame
- Event spawns after level 20
