"use-strict";

// 9.Операторы в JS
const all = `arr` + ` - object`;
const intPlusStr = 5 + +`5`;
console.log(all, `and`, typeof (intPlusStr), intPlusStr);

// increments decrements

let incr, decr;
incr = 10;
decr = 10;

incr++;
decr--; //postfix
console.log(incr, decr);
++incr;
--decr; //prefix
console.log(incr, decr);

const toCheckAnd = 2 * 2 == `4` && 2 * 2 === `4`; // and &&
const toCheckOr = 2 * 2 == `4` || 2 * 2 === `4`; // or ||

let isTrue = true;
if (toCheckAnd) {
    console.log(`it is okay, ${toCheckAnd}`);
} else {
    console.log(`it is not okay, ${toCheckAnd}`);
}

if (toCheckOr) {
    console.log(`very good! ${toCheckOr}`);
} else {
    console.log(`okay it's bad, ${toCheckOr}`);
}

console.log(toCheckAnd && !toCheckOr);
console.log(toCheckAnd || !toCheckOr);

// 13. Условия в JS
const Numbr = 1;

switch (Numbr) {
    case 50:
        console.log(`${Numbr} is not 50`);
        break;
    case 49:
        console.log(`${Numbr} is not 49`);
        break;
    case 1:
        console.log(`${Numbr} is true`);
        break;
    default:
        console.log(`okay!!!`);
        break;
}

// 14. Циклы

let currentNumbr = 100;

// while(currentNumbr > 0){    
//     currentNumbr--;
//     console.log(currentNumbr);
// }

// do {
//     console.log(currentNumbr++);
// } while (currentNumbr < 105);

for (let indx = 0; indx < (currentNumbr + 50); indx++) {
    if (indx === 120) {
        console.log(`this is favourite numb, ${indx}`);
        continue;
    }
    console.log(indx);
}

// 17. Methods

const str1 = "sultan";

console.log(str1.toLocaleLowerCase());

console.log(str1.indexOf("t"));

console.log(str1.slice(0, 4));

console.log(str1.substring(0, 4));

console.log(str1.substr(0, 6));

const numbr = 26.7;

console.log(`fround:${Math.fround(numbr)}, round: ${Math.round(numbr)}`);

const strToNumbr = "25.06px";

console.log(Math.round(parseFloat(strToNumbr)));

// 20. Objects

let allProfiles = [];

const Base = {
    names: ['Sultangali', 'Ayangali', 'Madina', 'Aitkali'],
    ages: [22, 16, 24, 28],
    contacts: {
        phoneNumbers: [87025588547, 87775620058, 87753951700, 87011126274],
        emails: ['sultanscreed@gmail.com', 'ayangali.zv@gmail.com', 'madin@gmail.com', 'aitokyo@gmail.com']
    },
    questions: ['Your name is?', 'Your age?', 'Your phone number?', 'Your email?']
};

function pushAllProfilesDetails() {
    for (let index = 0; index < 4; index++) {
        let pushingName = prompt(Base.questions[0], Base.names[index]),
            pushingAge = prompt(Base.questions[1], Base.ages[index]),
            pushingContactPhoneNumber = prompt(Base.questions[2], Base.contacts.phoneNumbers[index]),
            pushingContactEmail = prompt(Base.questions[3], Base.contacts.emails[index]);
        if (pushingName == null || pushingAge == null ||
            pushingContactPhoneNumber == null || pushingContactEmail == null) {
            index--;
        } else {
            allProfiles.push({
                name: pushingName,
                age: pushingAge,
                contact: {
                    phoneNumber: pushingContactPhoneNumber,
                    email: pushingContactEmail
                }
            });
        }
    }
}

// pushAllProfilesDetails();

function deleteEmailsFromAllProfiles() {
    for (let int = 0; int < allProfiles.length; int++) {
        if (allProfiles[int].contact.email != null) {
            console.log(`emails: ${allProfiles[int].contact.email} has deleted!`);
            delete allProfiles[int].contact.email;
        } else {
            break;
        }
    }
}

// deleteEmailsFromAllProfiles();

function getKeysFromAllProfiles() {
    for (let indx = 0; indx < allProfiles.length; indx++) {
        for (let keys in allProfiles[indx]) {
            if (typeof (allProfiles[indx][keys]) === "object") {
                for (let keysInKeys in allProfiles[indx][keys]) {
                    console.log(`key: ${keysInKeys}, value: ${allProfiles[indx][keys][keysInKeys]}`);
                }
            } else {
                console.log(`key: ${keys}, value: ${allProfiles[indx][keys]}`);
            }
        }
    }
}



// getKeysFromAllProfiles();

function getAllWeapons() {
    let sc = 1;
    let thisAllWeapons = InModifiedWeaponsDetails;
    for (let index = 0; index < thisAllWeapons.length; index++) {
        for (let indexIn = 0; indexIn < thisAllWeapons[index].weapon.length; indexIn++) {
            let shortIndex = thisAllWeapons[index].weapon[indexIn];
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

// 21. Arrays
function dropLastElementFromArrays() {
    let pushToName = [];
    for (let ind = 0; ind < allProfiles.length; ind++ ) {
        pushToName.push('asd');
        allProfiles[ind].name = pushToName[ind];
        console.log(allProfiles[ind]);
    }
}

const arr = [0, 2, 4, 6, 7];

function addElementsToArr(thisArrayToAdd) {
    for ( let ind = 0; ind < 20; ind++ ) {
        thisArrayToAdd.push(ind);
    }
}

console.log(addElementsToArr(arr));

console.log(arr);

function dropAllDataFromArr(thisArrToDrop) {
    for (let ind = thisArrToDrop.length; ind > 0; ind-- ){
        thisArrToDrop.pop();
    }
}


showArrayDirs(arr);

function showArrayDirs(thisArray) {
    console.log(thisArray);
}

