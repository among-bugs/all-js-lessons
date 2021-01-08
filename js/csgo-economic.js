"use strict";

let pistolsPrices = [],
    over100PistolsLists = [],
    modifiedWeaponsDetails = [],
    AllmodifiedWeapons = [];

const examples = [
    "pistols",
    "shotguns",
    "submachineGuns",
    "assaultRifles",
    "sniperRifles",
    "machineGuns",
    "grenades"
];
let InModifiedWeaponsDetails = [];
for (let indx = 0; indx < weapons.length; indx++) {

    let Info = [];

    for (let indInn = 0; indInn < weapons[indx].length; indInn++) {
        Info.push(`weapon: ${weapons[indx][indInn].name} >>> price:${
            weapons[indx][indInn].Price[0] + currency.USD}`);
    }

    InModifiedWeaponsDetails.push({
        category: examples[indx],
        information: Info
    });
};