import * as mongoose from 'mongoose';
import { Event } from '../schemas/event';
import DPlayer, { IPlayer } from '../schemas/player';

mongoose.connect('mongodb://client:Mudkip000@ds133814.mlab.com:33814/realm-idler', { useNewUrlParser: true });

interface Enemy {
    name: string;
    tier: number;
    hp: number; 
    xp: number;
    dmg: number;
    img: string;
}

export class Medusa implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Medusa';
        this.tier = 4;
        this.hp = 2000;
        this.xp = 195;
        this.dmg = 100;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Medusa.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Medusa!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 12 } }).then(function () { return console.log(player + ' killed a medusa') })
    }
}

export class GhostGod implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Ghost God';
        this.tier = 4;
        this.hp = 1000;
        this.xp = 100;
        this.dmg = 120;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Ghost%20God.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Ghost God!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 10 } }).then(function () { return console.log(player + ' killed a Ghost God') })
    }
    
}

export class Leviathan implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Ghost God';
        this.tier = 4;
        this.hp = 2000;
        this.xp = 190;
        this.dmg = 90;
        this.img = 'https://i.imgur.com/wADiQa9.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Leviathan!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 14 } }).then(function () { return console.log(player + ' killed a Leviathan') })
    }
}

export class WhiteDemon implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'White Demon';
        this.tier = 4;
        this.hp = 1000;
        this.xp = 100;
        this.dmg = 45;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/White%20Demon.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a White Demon!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 13 } }).then(function () { return console.log(player + ' killed a White Demon!') })
    }
}

export class SpriteGod implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Sprite God';
        this.tier = 4;
        this.hp = 2000;
        this.xp = 195;
        this.dmg = 100;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Sprite%20God.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Sprite God!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 11 } }).then(function () { return console.log(player + ' killed a Sprite God!') })
    }
}

export class SlimeGod implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Sprite God';
        this.tier = 4;
        this.hp = 1000;
        this.xp = 100;
        this.dmg = 80;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Slime%20God.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Slime God!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 17 } }).then(function () { return })
    }
}