import * as mongoose from 'mongoose';
import { Event } from '../schemas/event';
var Roll = require('roll'), roll = new Roll();
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

export class SumoMaster implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Sumo Master';
        this.tier = 1;
        this.hp = 340;
        this.xp = 56;
        this.dmg = 25;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Sumo%20Master.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Sumo Master!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 2 } }).then(function () { return console.log(player + ' killed a Sumo Master!') })
    }
}

export class GiantCrab implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Giant Crab';
        this.tier = 1;
        this.hp = 300;
        this.xp = 43;
        this.dmg = 10;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Giant%20Crab.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Giant Crab!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 3 } }).then(function () { return console.log(player + ' killed a Giant Crab!') })
    }

}

export class GoblinMage implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Goblin Mage';
        this.tier = 1;
        this.hp = 280;
        this.xp = 39;
        this.dmg = 16;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Goblin%20Mage.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Goblin Mage!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 2 } }).then(function () { return console.log(player + ' killed a Goblin Mage!') })
    }
}

export class ForestNymph implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Forest Nymph';
        this.tier = 1;
        this.hp = 120;
        this.xp = 6;
        this.dmg = 14;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Forest%20Nymph.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Forest Nymph!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 4 } }).then(function () { return console.log(player + ' killed a Forest Nymph!') })
    }
}

export class DarknessGolem implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Darkness Golem';
        this.tier = 1;
        this.hp = 220;
        this.xp = 15;
        this.dmg = 34;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Darkness%20Golem.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Darkness Golem!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 3 } }).then(function () { return console.log(player + ' killed a Darkness Golem!') })
    }
}

export class HornedDrake implements Enemy {
    public name: string;
    public tier: number;
    public hp: number;
    public xp: number;
    public dmg: number;
    public img: string;
    constructor(player: string) {
        this.name = 'Horned Drake';
        this.tier = 1;
        this.hp = 1270;
        this.xp = 228;
        this.dmg = 30;
        this.img = 'https://static.drips.pw/rotmg/wiki/Enemies/Horned%20Drake.png';
        this.fight(player, this.xp);
    }

    private fight(player: string, xp: number) {
        new Event().updateList(`${player} killed a Horned Drake!`);
        DPlayer.updateOne({ name: player }, { $inc: { xp: xp, gold: 4 } }).then(function () { return console.log(player + ' killed a Horned Drake!') })
    }
}

