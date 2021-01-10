"use strict";

const currency = {
    USD: "$"
};

const Availabilities = {
    t: "terrorists",
    ct: "counter terrorists"
};

console.log(currency.USD);
let weapons = [
    [
        {
                name: "P2000",
                Price: [200, currency.USD],
                "MagazineCapacity": "13/52",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 35,
                "Availability": Availabilities.ct
            },
            {
                name: "Glock-18",
                Price: [200, currency.USD],
                "MagazineCapacity": "20/120",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 30,
                "Availability": Availabilities.t
            },
            {
                name: "USP-S",
                Price: [200, currency.USD],
                "MagazineCapacity": "12/24",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 35,
                "Availability": Availabilities.ct
            },
            {
                name: "Dual Berettes",
                Price: [400, currency.USD],
                "MagazineCapacity": "30/120",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 38,
                "Availability": `${Availabilities.t}, ${Availabilities.ct}`

            },
            {
                name: "P250",
                Price: [300, currency.USD],
                "MagazineCapacity": "13/26",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [300, currency.USD]
                },
                "Damage": 38

            },
            {
                name: "Five SeveN",
                Price: [500, currency.USD],
                "MagazineCapacity": "20/100",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 32
            },
            {
                name: "Tec-9",
                Price: [500, currency.USD],
                "MagazineCapacity": "18/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 33

            },
            {
                name: "CZ75Auto",
                Price: [500, currency.USD],
                "MagazineCapacity": "12/12",
                "KillReward": {
                    "CompetitiveMode": [100, currency.USD],
                    "NormalMode": [50, currency.USD]
                },
                "Damage": 33

            },
            {
                name: "Desert Eagle",
                Price: [700, currency.USD],
                "MagazineCapacity": "7/35",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 73
            },
            {
                name: "Revolver R8",
                Price: [600, currency.USD],
                "MagazineCapacity": "8/8",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 86
            }
        
    ],
    [
        {
                name: "Nova",
                Price: [1050, currency.USD],
                "MagazineCapacity": "8/32",
                "KillReward": {
                    "CompetitiveMode": [900, currency.USD],
                    "NormalMode": [450, currency.USD]
                },
                "Damage": 234
            },
            {
                name: "XM1014",
                Price: [2000, currency.USD],
                "MagazineCapacity": "7/32",
                "KillReward": {
                    "CompetitiveMode": [900, currency.USD],
                    "NormalMode": [450, currency.USD]
                },
                "Damage": 120
            },
            {
                name: "MAG-7",
                Price: [1300, currency.USD],
                "MagazineCapacity": "5/32",
                "KillReward": {
                    "CompetitiveMode": [900, currency.USD],
                    "NormalMode": [450, currency.USD]
                },
                "Damage": 240
            },
            {
                name: "Sawed-off",
                Price: [1100, currency.USD],
                "MagazineCapacity": "7/32",
                "KillReward": {
                    "CompetitiveMode": [900, currency.USD],
                    "NormalMode": [450, currency.USD]
                },
                "Damage": 256
            }
        
    ],
    [
        {
                name: "MAC-10",
                Price: [1050, currency.USD],
                "MagazineCapacity": undefined,
                "KillReward": {
                    "CompetitiveMode": [600, currency.USD],
                    "NormalMode": [300, currency.USD]
                },
                "Damage": 29
            },
            {
                name: "MP9",
                Price: [1250, currency.USD],
                "MagazineCapacity": undefined,
                "KillReward": {
                    "CompetitiveMode": [600, currency.USD],
                    "NormalMode": [300, currency.USD]
                },
                "Damage": 26
            },
            {
                name: "MP7",
                Price: [1500, currency.USD],
                "MagazineCapacity": "30/120",
                "KillReward": {
                    "CompetitiveMode": [600, currency.USD],
                    "NormalMode": [300, currency.USD]
                },
                "Damage": 29
            },
            {
                name: "MP5SD",
                Price: [1500, currency.USD],
                "MagazineCapacity": "30/120",
                "KillReward": {
                    "CompetitiveMode": [600, currency.USD],
                    "NormalMode": [300, currency.USD]
                },
                "Damage": 27
            },
            {
                name: "UMP-45",
                Price: [1200, currency.USD],
                "MagazineCapacity": "25/100",
                "KillReward": {
                    "CompetitiveMode": [null, currency.USD],
                    "NormalMode": [null, currency.USD]
                },
                "Damage": 35
            },
            {
                name: "P90",
                Price: [2350, currency.USD],
                "MagazineCapacity": "50/100",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 26
            },
            {
                name: "PP-19",
                Price: [1400, currency.USD],
                "MagazineCapacity": undefined,
                "KillReward": {
                    "CompetitiveMode": [600, currency.USD],
                    "NormalMode": [300, currency.USD]
                },
                "Damage": 27
            }
        
    ],
    [
        {
                name: "FAMAS",
                Price: [2050, currency.USD],
                "MagazineCapacity": "25/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 30
            },
            {
                name: "Galil AR",
                Price: [1800, currency.USD],
                "MagazineCapacity": "35/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 30
            },
            {
                name: "M4A1-S",
                Price: [2900, currency.USD],
                "MagazineCapacity": "25/75",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 33
            },
            {
                name: "M4A4",
                Price: [3100, currency.USD],
                "MagazineCapacity": "30/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 33
            },
            {
                name: "AK-47",
                Price: [2700, currency.USD],
                "MagazineCapacity": "30/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 36
            },
            {
                name: "AUG",
                Price: [3300, currency.USD],
                "MagazineCapacity": "30/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 28
            },
            {
                name: "SG 553",
                Price: [3000, currency.USD],
                "MagazineCapacity": "30/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 30
            }
        
    ],
    [
        {
                name: "SSG 08",
                Price: [1700, currency.USD],
                "MagazineCapacity": "10/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 30
            },
            {
                name: "AWP",
                Price: [4750, currency.USD],
                "MagazineCapacity": "10/30",
                "KillReward": {
                    "CompetitiveMode": [100, currency.USD],
                    "NormalMode": [50, currency.USD]
                },
                "Damage": 115
            },
            {
                name: "SCAR-20",
                Price: [5000, currency.USD],
                "MagazineCapacity": "20/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 80
            },
            {
                name: "G3SG1",
                Price: [5000, currency.USD],
                "MagazineCapacity": "20/90",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 80
            }
        
    ],
    [
        {
                name: "M249",
                Price: [5200, currency.USD],
                "MagazineCapacity": "120/200",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 32
            },
            {
                name: "Negev",
                Price: [1700, currency.USD],
                "MagazineCapacity": "120/200",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 35
            }
        
    ],
    [
        {
                name: "Frag grenade",
                Price: [300, currency.USD],
                "MagazineCapacity": "1",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": 65
            },
            {
                name: "Light grenade",
                Price: [200, currency.USD],
                "MagazineCapacity": 2,
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": (65 / (50 * 100))
            },
            {
                name: "Smoke grenade",
                Price: [300, currency.USD],
                "MagazineCapacity": "1",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": (65 / (50 * 100))
            },
            {
                name: "Incendiary grenade",
                Price: [600, currency.USD],
                "MagazineCapacity": "1",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": (65 / (100 - 50))
            },
            {
                name: "Molotov cocktail",
                Price: [400, currency.USD],
                "MagazineCapacity": "1",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": (65 / (100 - 50))
            },
            {
                name: "Decoil",
                Price: [50, currency.USD],
                "MagazineCapacity": "1",
                "KillReward": {
                    "CompetitiveMode": [300, currency.USD],
                    "NormalMode": [150, currency.USD]
                },
                "Damage": (65 / (100 * 50))
            }
        
    ]
];

