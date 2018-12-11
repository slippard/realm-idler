import * as mongoose from 'mongoose';

export interface IPlayer extends mongoose.Document {
    name: string;
    turns: number;
    fame: number;
    gold: number;
    xp: number;
    level: number;
    hp: number,
    atk: number,
    def: number,
    spd: number,
    dex: number,
    vit: number,
    wis: number
};

export const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    turns: { type: Number, required: true },
    fame: { type: Number, required: true },
    gold: { type: Number, required: true},
    xp: { type: Number, required: true },
    level: { type: Number, required: true },
    hp: { type: Number, required: true },
    atk: { type: Number, required: true },
    def: { type: Number, required: true },
    spd: { type: Number, required: true },
    dex: { type: Number, required: true },
    vit: { type: Number, required: true },
    wis: { type: Number, required: true }
});

const DPlayer = mongoose.model<IPlayer>('Player', PlayerSchema);
export default DPlayer;