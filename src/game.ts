import { Turn } from './turn';

export class Game {
    private player: any;
    constructor() {
        console.log('Game starting...');
        this.player = {
            name: "koubi",
            hp: 100,
            atk: 10,
            def: 5,
            spd: 10
        }
        console.log('Player created: ' + this.player.name);
        this.session(this.player);
    }

    private session(player: any) {
        console.log('recieved: ' + player.name);
        new Turn(player);
    }
}