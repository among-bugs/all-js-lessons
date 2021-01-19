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

pushAllProfilesDetails();