import { Game } from './game';
import { Character } from './models/character';
import { Upgrade } from './schemas/upgrade';
import DPlayer, { IPlayer } from './schemas/player';
const { ipcRenderer } = require('electron');

class App {
    private login: HTMLElement;
    private username: string;
    private loginBtn: Element;
    private app: HTMLElement;
    private character: IPlayer;
    constructor() {
        this.login = (document.getElementsByClassName('login')[0] as HTMLInputElement);
        this.app = (document.getElementsByClassName('app')[0] as HTMLInputElement);
        this.loginBtn = document.getElementsByClassName('form__btn')[0];
        
        this.loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.username = (document.getElementById('username') as HTMLInputElement).value;
            this.submit(this.username);
        });

        /*  this.atk__upgrade.addEventListener('click', function(e) {
            var username = (document.getElementById('username') as HTMLInputElement).value;
            return new Upgrade().upgrade_atk(username);
        });  */

        /* (document.getElementsByClassName('def__upgrade')[0] as HTMLElement).addEventListener('click', function() {
            var username = (document.getElementById('player-name') as HTMLInputElement).value;
            return new Upgrade().upgrade_def(username);
        });

        (document.getElementsByClassName('spd__upgrade')[0] as HTMLElement).addEventListener('click', function() {
            var username = (document.getElementById('player-name') as HTMLInputElement).value;
            return new Upgrade().upgrade_spd(username);
        }); */
/*
        this.spd__upgrade.addEventListener('click', function(e) {
            var username = (document.getElementById('username') as HTMLInputElement).value;
            return new Upgrade().upgrade_spd(username);
        })

        this.dex__upgrade.addEventListener('click', function(e) {
            var username = (document.getElementById('username') as HTMLInputElement).value;
            return new Upgrade().upgrade_dex(username);
        })

        this.vit__upgrade.addEventListener('click', function(e) {
            var username = (document.getElementById('username') as HTMLInputElement).value;
            return new Upgrade().upgrade_vit(username);
        })

        this.wis__upgrade.addEventListener('click', function(e) {
            var username = (document.getElementById('username') as HTMLInputElement).value;
            return new Upgrade().upgrade_wis(username);
        }) */


        ipcRenderer.on('createdchar', (event: any, char: IPlayer) => {
            this.character = char;
            console.log('char: ' + char.name);
        })

    }

    private submit(name: string) {
        if (!name) {
            return alert('No playername entered');
        } else {
            ipcRenderer.send('starting-game', name);
            new Game(name, 300);
            this.login.style.opacity = '0';
            this.app.style.visibility = 'visible';
            this.app.style.opacity = '1';
            setTimeout(() => {
                this.login.style.display = 'none';
            }, 1000);
        }
    }

    
}

new App();