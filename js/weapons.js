const USD = currency.USD;
const counterTerrorists = Availabilities.ct,
      terrorists = Availabilities.t,
      both = Availabilities.both;

function setPrice(thisPrice) {
    return [thisPrice, USD];
}

const weapon = {
    Name: "weapon name",
    Price: '< 16000$', //[200, currency.USD],
    MagazineCapacity: "0/0",
    KillReward: {
        CompetitiveMode: [300, USD],
        NormalMode: [150, USD],
    },
    Damage: 'damage point',
    Availability: both //to both teams
};

const P2000 = Object.create(weapon);
P2000.Name = "P2000";
P2000.Price = setPrice(200);
P2000.MagazineCapacity = "13/52";
P2000.Damage = 35;
P2000.Availability = counterTerrorists;

const Glock18 = Object.create(weapon);
Glock18.Name = "Glock-18";
Glock18.Price = setPrice(200);
Glock18.MagazineCapacity = "20/120"; 
Glock18.Damage = 30;
Glock18.Availability = terrorists;

const USP_S = Object.create(weapon);
USP_S.Name = "USP-S";
USP_S.Price = setPrice(200);
USP_S.MagazineCapacity = "12/24";
USP_S.Damage = 35;
USP_S.Availability = counterTerrorists;

const DualBerettes = Object.create(weapon);
DualBerettes.Name = "Dual Berettes";
DualBerettes.Price = setPrice(400);
DualBerettes.MagazineCapacity = "30/120";
DualBerettes.Damage = 38;

const P250 = Object.create(weapon);
P250.Name = "P250";
P250.Price = setPrice(300);
P250.MagazineCapacity = "13/26";
P250.Damage = 38;

const FiveSeveN = Object.create(weapon);
FiveSeveN.Name = "Five SeveN";
FiveSeveN.Price = setPrice(500);
FiveSeveN.MagazineCapacity = "20/100";
FiveSeveN.Damage = 32;
FiveSeveN.Availability = counterTerrorists;

const Tec9 = Object.create(weapon);
Tec9.Name = "Tec-9";
Tec9.Price = setPrice(500);
Tec9.MagazineCapacity = "18/90";
Tec9.Damage = 33;
Tec9.Availability = terrorists;

const CZ75Auto = Object.create(weapon);
CZ75Auto.Name = "CZ75Auto";
CZ75Auto.Price = setPrice(500);
CZ75Auto.MagazineCapacity = "12/12";
CZ75Auto.Damage = 33;

const DesertEagle = Object.create(weapon);
DesertEagle.Name = "Desert Eagle";
DesertEagle.Price = setPrice(700);
DesertEagle.MagazineCapacity = "7/35";
DesertEagle.Damage = 73;

const RevolverR8 = Object.create(weapon);
RevolverR8.Name = "Revolver R8";
RevolverR8.Price = setPrice(600);
RevolverR8.MagazineCapacity = "8/8";
RevolverR8.Damage = 86;

const Nova = Object.create(weapon);
Nova.Name = "Name";
Nova.Price = setPrice(1050);
Nova.MagazineCapacity = "8/32";
Nova.KillReward.CompetitiveMode = setPrice(900);
Nova.KillReward.NormalMode = setPrice(450);
Nova.Damage = 234;

const XM1014 = Object.create(weapon);
XM1014.Name = "XM1014";
XM1014.Price = setPrice(2000);
XM1014.MagazineCapacity = "7/32";
XM1014.KillReward.CompetitiveMode = setPrice(900);
XM1014.KillReward.NormalMode = setPrice(450);

const MAG7 = Object.create(weapon);
MAG7.Name = "MAG-7";
MAG7.Price = setPrice(1300);
MAG7.MagazineCapacity = "5/32";
MAG7.Damage = 240;
MAG7.Availability = counterTerrorists;

const SawedOff = Object.create(weapon);
SawedOff.Name = "Sawed-off";
SawedOff.Price = setPrice(1100);
SawedOff.MagazineCapacity = "7/32";
SawedOff.KillReward.CompetitiveMode = setPrice(900);
SawedOff.KillReward.NormalMode = setPrice(450);
SawedOff.Damage = 256;
SawedOff.Availability = terrorists;

const MAC10 = Object.create(weapon);
MAC10.Name = "MAC-10";
MAC10.Price = setPrice(1050);
MAC10.KillReward.CompetitiveMode = setPrice(600);
MAC10.KillReward.NormalMode = setPrice(300);
MAC10.Damage = 29;
MAC10.Availability = terrorists;

const MP9 = Object.create(weapon);
MP9.Name = "MP9";
MP9.Price = setPrice(1250);
MP9.KillReward.CompetitiveMode = setPrice(600);
MP9.KillReward.NormalMode = setPrice(300);
MP9.Damage = 26;
MP9.Availability = counterTerrorists;

let MP7 = {};
Object.setPrototypeOf(MP7, weapon);
MP7.Name = "MP7";
MP7.Price = setPrice(1500);
MP7.MagazineCapacity = "30/120";
MP7.KillReward.CompetitiveMode = setPrice(700);








