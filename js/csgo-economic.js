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

function getAllWeapons() {
    let sc = 1;
    for (let index = 0; index < InModifiedWeaponsDetails.length; index++) {
        for (let indexIn = 0; indexIn < InModifiedWeaponsDetails[index].weapon.length; indexIn++) {
            let shortIndex = InModifiedWeaponsDetails[index].weapon[indexIn];
            const {name} = shortIndex; // деструктуризация объектов 
            console.log(name);
            for (let keys in shortIndex) {
                if (typeof (shortIndex[keys]) === "object") {
                    for (let keyIn in shortIndex[keys]) {
                        console.log(`key:${keyIn}, value:${shortIndex[keys][keyIn]}`);
                    }
                } else {
                    console.log(`key:${keys}, value:${shortIndex[keys]}`);
                }
            }
            console.log(`__________________________________________`);
        }
    }
}

function addNewFunctionToWeapons() {
    let allWeapons = InModifiedWeaponsDetails;

    for (let int = 0; int < allWeapons.length; int++ ) {
        for (let int2 = 0; int2 < allWeapons[int].weapon.length; int2++ ) {
            allWeapons[int].weapon[int2] = ({
                showText: function () {
                    console.log(`test`);
                }
            });
            console.log(allWeapons[int].weapon[int2].showText());
        }
    }
}

