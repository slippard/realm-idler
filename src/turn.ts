var Roll = require('roll'), roll = new Roll();
var _ = require('lodash');

export class Turn {

    /* DOM ELEMENTS */
    private name: HTMLElement = (document.getElementsByClassName('player-name')[0] as HTMLInputElement);
    private xp: HTMLElement = (document.getElementsByClassName('xpbar__value')[0] as HTMLInputElement);
    private fame: HTMLElement = (document.getElementsByClassName('famebar__value')[0] as HTMLInputElement);
    private atk: HTMLElement = (document.getElementsByClassName('atk__value')[0] as HTMLInputElement);
    private spd: HTMLElement = (document.getElementsByClassName('spd__value')[0] as HTMLInputElement);
    private vit: HTMLElement = (document.getElementsByClassName('vit__value')[0] as HTMLInputElement);
    private def: HTMLElement = (document.getElementsByClassName('def__value')[0] as HTMLInputElement);
    private dex: HTMLElement = (document.getElementsByClassName('dex__value')[0] as HTMLInputElement);
    private wis: HTMLElement = (document.getElementsByClassName('wis__value')[0] as HTMLInputElement);
    private lvl: HTMLElement = (document.getElementsByClassName('xpbar__level')[0] as HTMLInputElement);

    /* LOGIC */
    private gold: Number;
    private speed: Number;
    private loop: Boolean;

    constructor(player: any) {
        this.loop = true;
        while (this.loop = true) {
            this.updateWindow(player);
            this.action(player);
        }
    }

    private async updateWindow(player: any) {
        return await this.updateFields(player);
    }

    private updateFields(player: any) {
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
    }

    private async action(player: any) {
        let output = roll.roll('1d100').result;
        let player_speed = await this.getSpeed(player);
        console.log('player speeD: ' + player_speed*100)
        if (output >= 80) {
            return await this.fight();
        } else {
            return await this.move(player, player_speed);
        }
    }

    

    private async fight() {
        return console.log('Fought enemy');
    }

    private async getSpeed(player: any) {
        this.speed = player.stats.spd;
        let arr = [
            player.stats.atk,
            player.stats.def,
            player.stats.spd,
            player.stats.dex,
            player.stats.vit,
            player.stats.wis
        ];
        let pace = _.sum(arr);
        /* let pace = Math.floor(this.speed + player.stats.atk + ) */
        return pace;
    }


}