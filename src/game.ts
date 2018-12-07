import { Turn } from './turn';

export class Game {
    private player: any;
    constructor(name: string) {
        this.defaultCharacter(name).then(() => this.newSession(this.player));
    }

    private newSession(player: any) {
        new Turn(player);
    }

    private async defaultCharacter(name: string) {
        return this.player = {
            name: name,
            fame: 0,
            xp: 0,
            level: 1,
            stats: {
                hp: 100,
                atk: 12,
                def: 0,
                spd: 10,
                dex: 15,
                vit: 12,
                wis: 12
            },
            equip: {
                weapon: {
                    name: '',
                    tier: 0,
                    shots: 2,
                    mindmg: 10,
                    maxdmg: 25
                },
                armor: {
                    name: 'Robe of the Neophyte'
                },
                ring: {
                    name: 'Ring of Minor Defense'
                }
            }
        }
    }

}