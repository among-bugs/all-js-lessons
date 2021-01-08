"use strict";

const currency = {
    USD: "$"
};
console.log(currency.USD);
let weapons = [
    [
        {
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
                "Magazine capacity": "18/90",
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
        
    ],
    [
        {
                name: "Nova",
                Price: [1050, currency.USD],
                "Magazine capacity": "8/32",
                "Kill reward": {
                    "competitive mode": [900, currency.USD],
                    "normal mode": [450, currency.USD]
                },
                "Damage": 234
            },
            {
                name: "XM1014",
                Price: [2000, currency.USD],
                "Magazine capacity": "7/32",
                "Kill reward": {
                    "competitive mode": [900, currency.USD],
                    "normal mode": [450, currency.USD]
                },
                "Damage": 120
            },
            {
                name: "MAG-7",
                Price: [1300, currency.USD],
                "Magazine capacity": "5/32",
                "Kill reward": {
                    "competitive mode": [900, currency.USD],
                    "normal mode": [450, currency.USD]
                },
                "Damage": 240
            },
            {
                name: "Sawed-off",
                Price: [1100, currency.USD],
                "Magazine capacity": "7/32",
                "Kill reward": {
                    "competitive mode": [900, currency.USD],
                    "normal mode": [450, currency.USD]
                },
                "Damage": 256
            }
        
    ],
    [
        {
                name: "MAC-10",
                Price: [1050, currency.USD],
                "Magazine capacity": undefined,
                "Kill reward": {
                    "competitive mode": [600, currency.USD],
                    "normal mode": [300, currency.USD]
                },
                "Damage": 29
            },
            {
                name: "MP9",
                Price: [1250, currency.USD],
                "Magazine capacity": undefined,
                "Kill reward": {
                    "competitive mode": [600, currency.USD],
                    "normal mode": [300, currency.USD]
                },
                "Damage": 26
            },
            {
                name: "MP7",
                Price: [1500, currency.USD],
                "Magazine capacity": "30/120",
                "Kill reward": {
                    "competitive mode": [600, currency.USD],
                    "normal mode": [300, currency.USD]
                },
                "Damage": 29
            },
            {
                name: "MP5SD",
                Price: [1500, currency.USD],
                "Magazine capacity": "30/120",
                "Kill reward": {
                    "competitive mode": [600, currency.USD],
                    "normal mode": [300, currency.USD]
                },
                "Damage": 27
            },
            {
                name: "UMP-45",
                Price: [1200, currency.USD],
                "Magazine capacity": "25/100",
                "Kill reward": {
                    "competitive mode": [null, currency.USD],
                    "normal mode": [null, currency.USD]
                },
                "Damage": 35
            },
            {
                name: "P90",
                Price: [2350, currency.USD],
                "Magazine capacity": "50/100",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 26
            },
            {
                name: "PP-19",
                Price: [1400, currency.USD],
                "Magazine capacity": undefined,
                "Kill reward": {
                    "competitive mode": [600, currency.USD],
                    "normal mode": [300, currency.USD]
                },
                "Damage": 27
            }
        
    ],
    [
        {
                name: "FAMAS",
                Price: [2050, currency.USD],
                "Magazine capacity": "25/90",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 30
            },
            {
                name: "Galil AR",
                Price: [1800, currency.USD],
                "Magazine capacity": "35/90",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 30
            },
            {
                name: "M4A1-S",
                Price: [2900, currency.USD],
                "Magazine capacity": "25/75",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 33
            },
            {
                name: "M4A4",
                Price: [3100, currency.USD],
                "Magazine capacity": "30/90",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 33
            },
            {
                name: "AK-47",
                Price: [2700, currency.USD],
                "Magazine capacity": "30/90",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 36
            },
            {
                name: "AUG",
                Price: [3300, currency.USD],
                "Magazine capacity": "30/90",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 28
            },
            {
                name: "SG 553",
                Price: [3000, currency.USD],
                "Magazine capacity": "30/90",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 30
            }
        
    ],
    [
        {
                name: "SSG 08",
                Price: [1700, currency.USD],
                "Magazine capacity": "10/90",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 30
            },
            {
                name: "AWP",
                Price: [4750, currency.USD],
                "Magazine capacity": "10/30",
                "Kill reward": {
                    "competitive mode": [100, currency.USD],
                    "normal mode": [50, currency.USD]
                },
                "Damage": 115
            },
            {
                name: "SCAR-20",
                Price: [5000, currency.USD],
                "Magazine capacity": "20/90",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 80
            },
            {
                name: "G3SG1",
                Price: [5000, currency.USD],
                "Magazine capacity": "20/90",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 80
            }
        
    ],
    [
        {
                name: "M249",
                Price: [5200, currency.USD],
                "Magazine capacity": "120/200",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 32
            },
            {
                name: "Negev",
                Price: [1700, currency.USD],
                "Magazine capacity": "120/200",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 35
            }
        
    ],
    [
        {
                name: "Frag grenade",
                Price: [300, currency.USD],
                "Magazine capacity": "1",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": 65
            },
            {
                name: "Light grenade",
                Price: [200, currency.USD],
                "Magazine capacity": 2,
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": (65 / (50 * 100))
            },
            {
                name: "Smoke grenade",
                Price: [300, currency.USD],
                "Magazine capacity": "1",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": (65 / (50 * 100))
            },
            {
                name: "Incendiary grenade",
                Price: [600, currency.USD],
                "Magazine capacity": "1",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": (65 / (100 - 50))
            },
            {
                name: "Molotov cocktail",
                Price: [400, currency.USD],
                "Magazine capacity": "1",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": (65 / (100 - 50))
            },
            {
                name: "Decoil",
                Price: [50, currency.USD],
                "Magazine capacity": "1",
                "Kill reward": {
                    "competitive mode": [300, currency.USD],
                    "normal mode": [150, currency.USD]
                },
                "Damage": (65 / (100 * 50))
            }
        
    ]
];
