import * as mongoose from 'mongoose';
import DPlayer, { IPlayer } from './schemas/player';

var Roll = require('roll'), roll = new Roll();
var _ = require('lodash');

export class Turn {

    /* DOM ELEMENTS */
    private name: HTMLElement = (document.getElementsByClassName('player-name')[0] as HTMLInputElement);
    private lvl: HTMLElement = (document.getElementsByClassName('xpbar__level')[0] as HTMLInputElement);
    private xp: HTMLElement = (document.getElementsByClassName('xpbar__value')[0] as HTMLInputElement);
    private fame: HTMLElement = (document.getElementsByClassName('famebar__value')[0] as HTMLInputElement);
    private atk: HTMLElement = (document.getElementsByClassName('atk__value')[0] as HTMLInputElement);
    private spd: HTMLElement = (document.getElementsByClassName('spd__value')[0] as HTMLInputElement);
    private vit: HTMLElement = (document.getElementsByClassName('vit__value')[0] as HTMLInputElement);
    private def: HTMLElement = (document.getElementsByClassName('def__value')[0] as HTMLInputElement);
    private dex: HTMLElement = (document.getElementsByClassName('dex__value')[0] as HTMLInputElement);
    private wis: HTMLElement = (document.getElementsByClassName('wis__value')[0] as HTMLInputElement);

    /* LOGIC */
    private player: any;
    private gold: number;
    private loop: boolean;
    private speed: number;
    constructor(player: IPlayer) {
        console.log(player.name + ' starting turn');
        this.startTurn(player);
    }

    private startTurn(player: object) {
        
    }

    private async updateFields(player: any) {
        this.name.innerHTML = player.name;
        this.xp.innerHTML = player.xp;
        this.lvl.innerHTML = player.level;
        this.fame.innerHTML = player.fame;
        this.atk.innerHTML = player.stats.atk;
        this.def.innerHTML = player.stats.def;
        this.spd.innerHTML = player.stats.spd;
        this.vit.innerHTML = player.stats.vit;
        this.dex.innerHTML = player.stats.vit;
        this.wis.innerHTML = player.stats.wis;
        return console.log('Main window updated');
    }

}