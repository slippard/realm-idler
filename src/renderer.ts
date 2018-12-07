import { Game } from './game';

class App {
    private login: HTMLElement;
    private username: string;
    private loginBtn: Element;
    private app: HTMLElement;
    constructor(doc: Document){
        this.login = (document.getElementsByClassName('login')[0] as HTMLInputElement);
        this.app = (document.getElementsByClassName('app')[0] as HTMLInputElement);
        this.loginBtn = doc.getElementsByClassName('form__btn')[0];
        this.loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.username = (document.getElementById('username') as HTMLInputElement).value;
            this.submit(this.username);
        })
    }
    
    private submit(player: string) {
        if (!player) {
            return console.log('No playername entered');
        } else {
            new Game(player);
            this.login.style.opacity = '0';
            this.app.style.visibility = 'visible';
            this.app.style.opacity = '1';
            setTimeout(() => {
                this.login.style.display = 'none';
            }, 1000);
        }
    }
}

new App(document);