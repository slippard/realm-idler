import * as mongoose from 'mongoose';
import DPlayer, { IPlayer } from '../schemas/player';
import { Event } from '../schemas/event';

mongoose.connect('mongodb://client:Mudkip000@ds133814.mlab.com:33814/realm-idler', { useNewUrlParser: true });

interface Enemy {
    name: string;
    tier: number;
    hp: number; 
    xp: number;
    dmg: number;
    img: string;
}

export class Minotaur implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Minotaur';
        this.tier = 2;
        this.hp = 850;
        this.xp = 144;
        this.dmg = 52;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Minotaur.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Minotaur!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 5 } }).then(function () { return console.log(player + ' killed a Minotaur!') })
    }
}

export class Urgle implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Urgle';
        this.tier = 2;
        this.hp = 1600;
        this.xp = 80;
        this.dmg = 48;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Urgle.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed an Urgle!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 5 } }).then(function () { return console.log(player + ' killed an Urgle!') })
    }
    
}

export class AdultWhiteDragon implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Adult White Dragon';
        this.tier = 2;
        this.hp = 400;
        this.xp = 190;
        this.dmg = 60;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Adult%20White%20Dragon.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed an Adult White Dragon!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 5 } }).then(function () { return console.log(player + ' killed an Adult White Dragon!') })
    }
}

export class FlayerGod implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Flayer God';
        this.tier = 2;
        this.hp = 1400;
        this.xp = 280;
        this.dmg = 60;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Flayer%20God.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed an Adult Flayer God!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 5 } }).then(function () { return console.log(player + ' killed an Adult Flayer God!') })
    }
}

export class UndeadDwarfGod implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Undead Dwarf God';
        this.tier = 2;
        this.hp = 800;
        this.xp = 280;
        this.dmg = 30;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Undead%20Dwarf%20God.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed an Undead Dwarf God!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 6 } }).then(function () { return console.log(player + ' killed an Undead Dwarf God!') })
    }
}