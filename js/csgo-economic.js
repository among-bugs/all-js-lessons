"use strict";

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
        // Info.push(`weapon: ${weapons[indx][indInn].name} >>> price:${
        //     weapons[indx][indInn].Price[0] + currency.USD}`);
        let usingInd = [],
            curr = currency.USD;
        usingInd = weapons[indx][indInn];
        
        Info.push({
            name: usingInd.name,
            price: usingInd.Price[0],
            magazineCapacity: usingInd.MagazineCapacity,
            killReward: {
                competitiveMode: usingInd.KillReward.CompetitiveMode[0] + curr,
                normalMode: weapons[indx][indInn].KillReward.NormalMode[0] + curr
            },
            damage: usingInd.Damage,
            availability: usingInd.
        });
    }
    InModifiedWeaponsDetails.push({
        category: examples[indx],
        weapon: Info
    });
}

let allWeaponsCategory = [];

for(let ind = 0; ind < examples.length; ind++){
    allWeaponsCategory.push([examples[ind], InModifiedWeaponsDetails[ind].weapon]);
}

const startMoney = 16000;
let currentMoney = startMoney;
let selectionWeapon = (InModifiedWeaponsDetails[0].weapon[0]);
currentMoney -= selectionWeapon.price;


let startMoneyInfo, currentMoneyInfo, selectionWeaponInfo;

const curr$ = currency.USD;

startMoneyInfo = (`round start money: ${startMoney + curr$}`);
selectionWeaponInfo = (`buy weapon: ${selectionWeapon.name}`);
currentMoneyInfo = (`current money: ${currentMoney + curr$}`);

let round = (`${startMoneyInfo} ${selectionWeaponInfo} ${currentMoneyInfo}`);