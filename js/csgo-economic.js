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
            availability: usingInd.Availability
        });
    }
    InModifiedWeaponsDetails.push({
        category: examples[indx],
        weapon: Info
    });
}

let allWeaponsCategory = [];

for (let ind = 0; ind < examples.length; ind++) {
    allWeaponsCategory.push([examples[ind], InModifiedWeaponsDetails[ind].weapon]);
}



let onlyCounterTerroristsWeapons = [],
    onlyTerroristsWeapons = [],
    forBothTeamsWeapons = [];

const sec = 1;
const curr$ = currency.USD;

for (let ind = 0; ind < allWeaponsCategory.length; ind++) {

    for (let indIn = 0; indIn < allWeaponsCategory[ind][sec].length; indIn++) {

        let selectedWeapons = allWeaponsCategory[ind][sec][indIn];

        let theseNames = selectedWeapons.name,
            thesePrices = selectedWeapons.price + curr$;

        if (selectedWeapons.availability == Availabilities.ct) {
            onlyCounterTerroristsWeapons.push(`name: ${theseNames}  price: ${thesePrices}`);
        } else if (selectedWeapons.availability == Availabilities.t) {
            onlyTerroristsWeapons.push(`name: ${theseNames}  price: ${thesePrices}`);
        } else {
            forBothTeamsWeapons.push(`name: ${theseNames}  price: ${thesePrices}`);
        }

    }

}

function currentRound(startMoney, category, selectWeapon, teams) {

    let currentMoney = startMoney;
    let selectionWeapon = allWeaponsCategory[category][1][selectWeapon];

    if (selectionWeapon.availability == teams ||
        selectionWeapon.availability == Availabilities.both) {

        if ((currentMoney - selectionWeapon.price) >= 0) {
            currentMoney = currentMoney - selectionWeapon.price;
        } else {
            console.log(`${selectionWeapon.name} бағасы тым қымбат!` +
                `сізде бар болғаны ${currentMoney + currency.USD} бар. сізге  жетпейді`);
        }

    } else {
        console.log(`Таңдалған командада ${
                    selectionWeapon.availability} бұндай мылтық жоқ, өтінемін басқа командадан іздеп көріңіз!`);

    }

    let startMoneyInfo, currentMoneyInfo, selectionWeaponInfo;
    startMoneyInfo = (`round start money: ${startMoney + curr$}`);
    selectionWeaponInfo = (`buy weapon: ${selectionWeapon.name}`);
    currentMoneyInfo = (`current money: ${currentMoney + curr$}`);

    let round = (`${startMoneyInfo} ${selectionWeaponInfo} ${currentMoneyInfo} + ${selectionWeapon.availability}`);

    return round;
}

function getPathForAllWeapons(category, indexOfWeapons) {
    let weapon = 1;
    let checkedAllCategory = allWeaponsCategory[category][weapon][indexOfWeapons];

    return checkedAllCategory;
}

let allWeaponsCategoryAfter = [];

let showAllWeapons = function () {
    for (let ind = 0; ind < examples.length; ind++) {
        for (let indIn = 0; indIn < allWeaponsCategory[ind][1].length; indIn++) {
            allWeaponsCategoryAfter.push(getPathForAllWeapons(ind, indIn));
        }
    }
    return allWeaponsCategoryAfter;
};

function getOnlyCounterTerroristsWeapons() {
    let onlyCTWeapons = [];
    for (let indx = 0; indx < allWeaponsCategory.length; indx++ ) {
        for (let indy = 0; indy < allWeaponsCategory[indx][1].length; indy++ ) {
            let shortIndex = allWeaponsCategory[indx][1][indy];
            let name = shortIndex.name,
                price = shortIndex.price + currency.USD,
                availability = shortIndex.availability;

            if (shortIndex.availability == Availabilities.ct ) {
                onlyCTWeapons.push(`${name}, ${price}, ${availability}`);
            }
        }
    }
    return onlyCTWeapons;
}
let pistols = [],
shotguns = [],
submachineGuns = [],
assaultRifles = [],
sniperRifles = [],
machineGuns = [],
grenades = [];
function pointAllWeaponCategory() {

    for (let ind = 0; ind < allWeaponsCategory.length; ind++ ) {
        switch (allWeaponsCategory[ind][0]) {
            case "pistols": 
                pistols = allWeaponsCategory[ind][1];
                break;
            case "shotguns":
                shotguns = allWeaponsCategory[ind][1];
                break;
            case "submachineGuns":
                submachineGuns = allWeaponsCategory[ind][1];
                break;
            case "assaultRifles":
                assaultRifles = allWeaponsCategory[ind][1];
                break;
            case "sniperRifles":
                sniperRifles = allWeaponsCategory[ind][1];
                break;
            case "machineGuns":
                machineGuns = allWeaponsCategory[ind][1];
                break;
            case "grenades":
                grenades = allWeaponsCategory[ind][1];
                break;
        }
    }
}

pointAllWeaponCategory();

