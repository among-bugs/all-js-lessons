"use strict";

const currency = {
    USD: "$"
};
console.log(currency.USD);
const weapons = {
    closeCombat: {

    },
    pistols: [{
            name: "P2000",
            Price: [200, currency.USD],
            "Magazine capacity": "13/52",
            "Kill reward": {
                "competitive mode": [300, currency.USD],
                "normal mode": [150, currency.USD]
            },
            "Damage": 35
        },
        {
            name: "Glock-18",
            Price: [200, currency.USD],
            "Magazine capacity": "20/120",
            "Kill reward": {
                "competitive mode": [300, currency.USD],
                "normal mode": [150, currency.USD]
            },
            "Damage": 30
        },
        {
            name: "USP-S",
            Price: [200, currency.USD],
            "Magazine capacity": "12/24",
            "Kill reward": {
                "competitive mode": [300, currency.USD],
                "normal mode": [150, currency.USD]
            },
            "Damage": 35
        },
        {
            name: "Dual Berettes",
            Price: [400, currency.USD],
            "Magazine capacity": "30/120",
            "Kill reward": {
                "competitive mode": [300, currency.USD],
                "normal mode": [150, currency.USD]
            },
            "Damage": 38

        },
        {
            name: "P250",
            Price: [300, currency.USD],
            "Magazine capacity": "13/26",
            "Kill reward": {
                "competitive mode": [300, currency.USD],
                "normal mode": [300, currency.USD]
            },
            "Damage": 38

        },
        {
            name: "Five SeveN",
            Price: [500, currency.USD],
            "Magazine capacity": "20/100",
            "Kill reward": {
                "competitive mode": [300, currency.USD],
                "normal mode": [150, currency.USD]
            },
            "Damage": 32
        },
        {
            name: "Tec-9",
            Price: [500, currency.USD],
            "Magazine capacity": "18,(24),{32}/90",
            "Kill reward": {
                "competitive mode": [300, currency.USD],
                "normal mode": [150, currency.USD]
            },
            "Damage": 33

        },
        {
            name: "CZ75Auto",
            Price: [500, currency.USD],
            "Magazine capacity": "12/12",
            "Kill reward": {
                "competitive mode": [100, currency.USD],
                "normal mode": [50, currency.USD]
            },
            "Damage": 33

        },
        {
            name: "Desert Eagle",
            Price: [700, currency.USD],
            "Magazine capacity": "7/35",
            "Kill reward": {
                "competitive mode": [300, currency.USD],
                "normal mode": [150, currency.USD]
            },
            "Damage": 73
        },
        {
            name: "Revolver R8",
            Price: [600, currency.USD],
            "Magazine capacity": "8/8",
            "Kill reward": {
                "competitive mode": [300, currency.USD],
                "normal mode": [150, currency.USD]
            },
            "Damage": 86
        }
    ]
};
//     },
// shotguns: {
//     "Nova": "",
//     "XM1014": "",
//     "MAG-7": "",
//     "Sawed-off": ""
// },
// submachineGuns: {
//     "MAC-10": "",
//     "MP9": "",
//     "MP7": "",
//     "MP5SD": "",
//     "UMP-45": "",
//     "P90": "",
//     "PP-19": ""
// },
// assaultRifles: {
//     "FAMAS": "",
//     "Galil AR": "",
//     "M4A1-S": "",
//     "M4A4": "",
//     "AK-47": "",
//     "AUG": "",
//     "SG 553": ""
// },
// sniperRifles: {
//     "SSG 08": "",
//     "AWP": "",
//     "SCAR-20": "",
//     "G3SG1": ""
// },
// machineGuns: {
//     "M249": "",
//     "Negev": ""
// },
// grenades: {
//     "Frag grenade": "",
//     "Light grenade": "",
//     "Smoke grenade": "",
//     "Incendiary grenade": "",
//     "Molotov cocktail": "",
//     "Decoil": ""
// }


let pistolsPrices = [],
    over100PistolsLists = [];

for (let index = 0; index < weapons.pistols.length; index++) {
    let nameOfPistols = weapons.pistols[index].name;
    let priceOfPistols = weapons.pistols[index].Price[0] +
                weapons.pistols[index].Price[1];

    if (weapons.pistols[index].Price[0] >= 300)
    {
        pistolsPrices[index] = 
        {
            name: nameOfPistols,
            price: priceOfPistols,
            over100$: true
        };
    } else {
        pistolsPrices[index] = 
        {
            name: nameOfPistols,
            price: priceOfPistols,
            over100$: false
        };
    }

    if (pistolsPrices[index].over100$ == true) {
        over100PistolsLists += `, ${pistolsPrices[index].name}`; 
    }
}
