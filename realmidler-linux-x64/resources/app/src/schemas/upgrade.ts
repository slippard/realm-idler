import * as mongoose from 'mongoose';
import DPlayer, { IPlayer } from '../schemas/player';


export class Upgrade {
    constructor() {
    }

    upgrade_atk(name: string) {
        DPlayer.findOne({ name: name }, function (err, doc) {
            if (err) console.log(err);
            if (doc) {
                let bank = doc.gold;
                if (bank >= 250) {
                    let newbalance = Math.floor(bank - 250);
                    DPlayer.updateOne({ name: name }, { $inc: { atk: 1 } }).then(function () { return console.log('Purchased ATK') })
                    DPlayer.updateOne({ name: name }, { $set: { gold: newbalance } }).then(function () { return console.log('Purchased ATK') })
                } else {
                    return alert('You do not have enough gold for that.');
                }

            } else {
                return console.log('Something went wrong...');
            }
        });
    }

    upgrade_def(name: string) {
        DPlayer.findOne({ name: name }, function (err, doc) {
            if (err) console.log(err);
            if (doc) {
                let bank = doc.gold;
                if (bank >= 250) {
                    let newbalance = Math.floor(bank - 300);
                    DPlayer.updateOne({ name: name }, { $inc: { def: 1 } }).then(function () { return console.log('Purchased DEF') })
                    DPlayer.updateOne({ name: name }, { $set: { gold: newbalance } }).then(function () { return console.log('Purchased DEF') })
                } else {
                    return alert('You do not have enough gold for that.');
                }

            } else {
                return console.log('Something went wrong...');
            }
        });
    }

    upgrade_spd(name: string) {
        DPlayer.findOne({ name: name }, function (err, doc) {
            if (err) console.log(err);
            if (doc) {
                let bank = doc.gold;
                if (bank >= 250) {
                    let newbalance = Math.floor(bank - 300);
                    DPlayer.updateOne({ name: name }, { $inc: { spd: 1 } }).then(function () { return console.log('Purchased SPD') })
                    DPlayer.updateOne({ name: name }, { $set: { gold: newbalance } }).then(function () { return console.log('Purchased SPD') })
                } else {
                    return alert('You do not have enough gold for that.');
                }

            } else {
                return console.log('Something went wrong...');
            }
        });
    }

    upgrade_dex(name: string) {
        DPlayer.findOne({ name: name }, function (err, doc) {
            if (err) console.log(err);
            if (doc) {
                let bank = doc.gold;
                if (bank >= 250) {
                    let newbalance = Math.floor(bank - 300);
                    DPlayer.updateOne({ name: name }, { $inc: { dex: 1 } }).then(function () { return console.log('Purchased DEX') })
                    DPlayer.updateOne({ name: name }, { $set: { gold: newbalance } }).then(function () { return console.log('Purchased DEX') })
                } else {
                    return alert('You do not have enough gold for that.');
                }

            } else {
                return console.log('Something went wrong...');
            }
        });
    }

    upgrade_vit(name: string) {
        DPlayer.findOne({ name: name }, function (err, doc) {
            if (err) console.log(err);
            if (doc) {
                let bank = doc.gold;
                if (bank >= 250) {
                    let newbalance = Math.floor(bank - 150);
                    DPlayer.updateOne({ name: name }, { $inc: { vit: 1 } }).then(function () { return console.log('Purchased VIT') })
                    DPlayer.updateOne({ name: name }, { $set: { gold: newbalance } }).then(function () { return console.log('Purchased VIT') })
                } else {
                    return alert('You do not have enough gold for that.');
                }

            } else {
                return console.log('Something went wrong...');
            }
        });
    }

    upgrade_wis(name: string) {
        DPlayer.findOne({ name: name }, function (err, doc) {
            if (err) console.log(err);
            if (doc) {
                let bank = doc.gold;
                if (bank >= 250) {
                    let newbalance = Math.floor(bank - 150);
                    DPlayer.updateOne({ name: name }, { $inc: { wis: 1 } }).then(function () { return console.log('Purchased WIS') })
                    DPlayer.updateOne({ name: name }, { $set: { gold: newbalance } }).then(function () { return console.log('Purchased WIS') })
                } else {
                    return alert('You do not have enough gold for that.');
                }

            } else {
                return console.log('Something went wrong...');
            }
        });
    }
}