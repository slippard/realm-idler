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