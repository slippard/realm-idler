export interface Character {
    name: string;
    fame: number;
    xp: number;
    level: number;
    stats: [
        { hp: number },
        { atk: number },
        { def: number },
        { spd: number },
        { dex: number },
        { vit: number },
        { wis: number }
    ];
}