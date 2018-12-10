import { Turn } from './turn';
import * as mongoose from 'mongoose';
import DPlayer, { IPlayer } from './schemas/player';
import { Upgrade } from './schemas/upgrade';
import { Event } from './schemas/event';
import { Medusa, GhostGod, Leviathan, WhiteDemon, SlimeGod, SpriteGod } from './enemies/gods';
import { GiantCrab, GoblinMage, SumoMaster, DarknessGolem, ForestNymph, HornedDrake } from './enemies/lowlands';
import { AdultWhiteDragon, FlayerGod, Minotaur, UndeadDwarfGod, Urgle } from './enemies/highlands';

import { setInterval } from 'timers';
var Roll = require('roll'), roll = new Roll();
import events = require('events');

mongoose.connect('mongodb://client:Mudkip000@ds133814.mlab.com:33814/realm-idler', { useNewUrlParser: true });

export class Game {

    private player: string;
    private loop: boolean;
    public speed: number;
    public roll: number;
    private atkUpgrade: HTMLElement;
    constructor(name: string, speed: number) {

        (document.getElementsByClassName('atk__upgrade')[0] as HTMLElement).addEventListener('click', function() { return new Upgrade().upgrade_atk(name) });
        (document.getElementsByClassName('def__upgrade')[0] as HTMLElement).addEventListener('click', function() { return new Upgrade().upgrade_def(name) });
        (document.getElementsByClassName('spd__upgrade')[0] as HTMLElement).addEventListener('click', function() { return new Upgrade().upgrade_spd(name) });
        (document.getElementsByClassName('dex__upgrade')[0] as HTMLElement).addEventListener('click', function() { return new Upgrade().upgrade_dex(name) });
        (document.getElementsByClassName('vit__upgrade')[0] as HTMLElement).addEventListener('click', function() { return new Upgrade().upgrade_vit(name) });
        (document.getElementsByClassName('wis__upgrade')[0] as HTMLElement).addEventListener('click', function() { return new Upgrade().upgrade_wis(name) });
        this.speed = speed;
        this.loop = false;
        this.player = name;
        this.startGame(name);
    }

    private startGame(name: string) {
        setInterval(() => {
            this.turn(name);
        }, this.speed);
    }

    private turn(name: string) {
        this.refresh(name);
        DPlayer.findOne({ name: name }, function (err, char) {
            if (err) {
                console.log(err);
            }
            if (char) {
                /* LEVELS */
                var pace = Math.floor(char.atk + char.spd + char.dex) / 2;
                //console.log(`Pace: ${pace}`);

                var curlevel = char.level;

                switch (char.level) {
                    case 1:
                        if (char.xp >= 50) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 2:
                        if (char.xp >= 200) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 3:
                        if (char.xp >= 450) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 4:
                        if (char.xp >= 800) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 5:
                        if (char.xp >= 1250) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 6:
                        if (char.xp >= 1800) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 7:
                        if (char.xp >= 2450) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 8:
                        if (char.xp >= 3200) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 9:
                        if (char.xp >= 4050) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 10:
                        if (char.xp >= 5000) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 11:
                        if (char.xp >= 6050) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 12:
                        if (char.xp >= 7200) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 13:
                        if (char.xp >= 8450) {
                            var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 14:
                        if (char.xp >= 9800) {
                            DPlayer.updateOne({ name: name }, { $set: { level: 15 } }).then(function () { return }); var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 15:
                        if (char.xp >= 11250) {
                            DPlayer.updateOne({ name: name }, { $set: { level: 16 } }).then(function () { return }); var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 16:
                        if (char.xp >= 12800) {
                            DPlayer.updateOne({ name: name }, { $set: { level: 17 } }).then(function () { return }); var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 17:
                        if (char.xp >= 14450) {
                            DPlayer.updateOne({ name: name }, { $set: { level: 18 } }).then(function () { return }); var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 18:
                        if (char.xp >= 16200) {
                            DPlayer.updateOne({ name: name }, { $set: { level: 19 } }).then(function () { return }); var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 19:
                        if (char.xp >= 18050) {
                            DPlayer.updateOne({ name: name }, { $set: { level: 20 } }).then(function () { return }); var level = char.level + 1;
                            var hp = char.hp + 20;
                            var atk = char.atk + 1;
                            var spd = char.spd + 1;
                            var dex = char.dex + 1;
                            var vit = char.vit + 1;
                            var wis = char.wis + 1;
                            DPlayer.updateOne({ name: name }, { $set: { level: level, hp: hp, atk: atk, spd: spd, dex: dex, vit: vit, wis: wis } }).then(function () { return console.log('Leveled up') });
                        }
                        break;
                    case 20:
                        if (char.xp >= 18050) {
                            let fame = Math.floor(char.xp / 2000);
                            new UpdateWindow().level20();
                            DPlayer.updateOne({ name: name }, { $set: { fame: fame } }).then(function () { return });
                        }
                        break;
                    default:
                        break;
                }

                /* ROLL FOR MOVE */

                var outcome = roll.roll('1d200').result;
                //console.log(`outcome: ${outcome}`);
                if (outcome <= pace) {
                    // Pick Enemy
                    if (curlevel <= 6) {
                        var e = roll.roll('1d6').result;
                        if (e == 1) return new GiantCrab(char.name);
                        if (e == 2) return new SumoMaster(char.name);
                        if (e == 3) return new GoblinMage(char.name);
                        if (e == 4) return new ForestNymph(char.name);
                        if (e == 5) return new DarknessGolem(char.name);
                        if (e == 6) return new HornedDrake(char.name);
                    }
                    if (curlevel >= 7 && curlevel <= 13) {
                        var e = roll.roll('1d6').result;
                        if (e == 1) return new Minotaur(char.name);
                        if (e == 2) return new Urgle(char.name);
                        if (e == 3) return new AdultWhiteDragon(char.name);
                        if (e == 4) return new FlayerGod(char.name);
                        if (e == 5) return new UndeadDwarfGod(char.name);
                        if (e == 6) return new ForestNymph(char.name);
                    }
                    if (curlevel >= 14 && curlevel <= 19) {
                        var e = roll.roll('1d6').result;
                        if (e == 1) return new Medusa(char.name);
                        if (e == 2) return new GhostGod(char.name);
                        if (e == 3) return new Leviathan(char.name);
                        if (e == 4) return new WhiteDemon(char.name);
                        if (e == 5) return new Minotaur(char.name);
                        if (e == 6) return new FlayerGod(char.name);
                    }
                    if (curlevel === 20) {
                        var e = roll.roll('1d6').result;
                        if (e == 1) return new Medusa(char.name);
                        if (e == 2) return new GhostGod(char.name);
                        if (e == 3) return new Leviathan(char.name);
                        if (e == 4) return new WhiteDemon(char.name);
                        if (e == 5) return new SlimeGod(char.name);
                        if (e == 6) return new SpriteGod(char.name);
                    }
                } else {
                    // regen
                    /* (document.getElementsByClassName('event__list__item')[0] as HTMLInputElement).innerHTML = 'Moved 1 tile.'; */
                    /* Gold Find */
                    let goldFind = roll.roll('1d20').result;
                    if (goldFind >= 15) {
                        DPlayer.updateOne({ name: name }, { $inc: { gold: 1 } }).then(function () { return new Event().updateList(`${name} gained +1 Gold.`); })
                    } else {
                        var distance = roll.roll('1d6').result;
                        new Event().updateList(`${name} Moved ${distance} tiles.`);
                    }
                }
            } else {
                return alert('Char not found!');
            }
        })
    }

    private async refresh(name: string) {
        return DPlayer.findOne({ name: name }, function (err, char) {
            if (err) {
                console.log(err);
            }
            if (char) {
                new UpdateWindow().emit('load', char);
            } else {
                return alert('Char not found!');
            }
        })
    }
}

interface IMyEvent {
    on(event: 'hello', listener: (name: string) => void): this;
    on(event: string, listener: Function): this;
}

/* interface ISpeed {
    on(event: 'level', listener: (name: string) => void): this;
    on(event: string, listener: Function): this;
}

class Speed extends events.EventEmitter implements ISpeed {
    private speed: number;
    constructor() {
        super();
        this.on('current-speed', function(char: IPlayer) {
            return this.getSpeed(char);
        });
    }
    getSpeed(char: IPlayer): number {
        return 5;
    }
} */

class UpdateWindow extends events.EventEmitter implements IMyEvent {
    /* DOM ELEMENTS */
    private xpbar: HTMLElement = (document.getElementsByClassName('xpbar')[0] as HTMLInputElement);
    private famebar: HTMLElement = (document.getElementsByClassName('famebar')[0] as HTMLInputElement);
    private gold: HTMLElement = (document.getElementsByClassName('gold')[0] as HTMLInputElement);
    private name: HTMLElement = (document.getElementsByClassName('player-name')[0] as HTMLInputElement);
    private atk__upgrade: HTMLElement = (document.getElementsByClassName('atk__upgrade')[0] as HTMLInputElement);
    private spd__upgrade: HTMLElement = (document.getElementsByClassName('spd__upgrade')[0] as HTMLInputElement);
    private vit__upgrade: HTMLElement = (document.getElementsByClassName('vit__upgrade')[0] as HTMLInputElement);
    private def__upgrade: HTMLElement = (document.getElementsByClassName('def__upgrade')[0] as HTMLInputElement);
    private dex__upgrade: HTMLElement = (document.getElementsByClassName('dex__upgrade')[0] as HTMLInputElement);
    private wis__upgrade: HTMLElement = (document.getElementsByClassName('wis__upgrade')[0] as HTMLInputElement);
    private lvl: HTMLElement = (document.getElementsByClassName('xpbar__level')[0] as HTMLInputElement);
    private xp: HTMLElement = (document.getElementsByClassName('xpbar__value')[0] as HTMLInputElement);
    private fame: HTMLElement = (document.getElementsByClassName('famebar__value')[0] as HTMLInputElement);
    private atk: HTMLElement = (document.getElementsByClassName('atk__value')[0] as HTMLInputElement);
    private spd: HTMLElement = (document.getElementsByClassName('spd__value')[0] as HTMLInputElement);
    private vit: HTMLElement = (document.getElementsByClassName('vit__value')[0] as HTMLInputElement);
    private def: HTMLElement = (document.getElementsByClassName('def__value')[0] as HTMLInputElement);
    private dex: HTMLElement = (document.getElementsByClassName('dex__value')[0] as HTMLInputElement);
    private wis: HTMLElement = (document.getElementsByClassName('wis__value')[0] as HTMLInputElement);

    constructor() {
        super();
        this.on('load', function (char: IPlayer) {
            this.updatePage(char);
        });
        this.once('level20', function (char: IPlayer) {
            (document.getElementsByClassName('xpbar')[0] as HTMLInputElement).classList.add('hidden');
            (document.getElementsByClassName('famebar')[0] as HTMLInputElement).classList.remove('hidden');
        })
    }

    loadPage(char: IPlayer): void {
        this.emit('load', char);
    }

    level20(): void {
        this.emit('level20')
    }

    private updatePage(char: IPlayer) {
        this.name.innerHTML = char.name;
        this.lvl.innerHTML = `${char.level}`;
        this.xp.innerHTML = `${char.xp}`;
        this.fame.innerHTML = `${char.fame}`;
        this.gold.innerHTML = `${char.gold}`;
        this.def.innerHTML = `${char.def}`;
        this.atk.innerHTML = `${char.atk}`;
        this.spd.innerHTML = `${char.spd}`;
        this.vit.innerHTML = `${char.vit}`;
        this.dex.innerHTML = `${char.dex}`;
        this.wis.innerHTML = `${char.wis}`;
        if (char.gold < 500) {
            this.atk__upgrade.style.display = 'none';
            this.def__upgrade.style.display = 'none';
            if (char.gold < 250) {
                this.spd__upgrade.style.display = 'none';
                this.vit__upgrade.style.display = 'none';
                this.dex__upgrade.style.display = 'none';
                this.wis__upgrade.style.display = 'none';
            } else {
                this.spd__upgrade.style.display = 'block';
                this.vit__upgrade.style.display = 'block';
                this.dex__upgrade.style.display = 'block';
                this.wis__upgrade.style.display = 'block';
            }
        } else {
            this.atk__upgrade.style.display = 'block';
            this.def__upgrade.style.display = 'block';
        }
        if (char.atk == 75) {
            this.atk__upgrade.style.display = 'none';
            this.atk.style.color = `#FFFF00`;
            this.atk.innerHTML = `${char.atk}`;
        }
        if (char.def == 25) {
            this.def__upgrade.style.display = 'none';
            this.def.style.color = `#FFFF00`;
            this.def.innerHTML = `${char.def}`;
        }
        if (char.spd == 50) {
            this.spd__upgrade.style.display = 'none';
            this.spd.style.color = `#FFFF00`;
            this.spd.innerHTML = `${char.spd}`;
        }
        if (char.vit == 40) {
            this.vit__upgrade.style.display = 'none';
            this.vit.style.color = `#FFFF00`;
            this.vit.innerHTML = `${char.vit}`;
        }
        if (char.wis == 60) {
            this.wis__upgrade.style.display = 'none';
            this.wis.style.color = `#FFFF00`;
            this.wis.innerHTML = `${char.wis}`;
        }
        if (char.dex == 75) {
            this.dex__upgrade.style.display = 'none';
            this.dex.style.color = `#FFFF00`;
            this.dex.innerHTML = `${char.dex}`;
        }


    }

}