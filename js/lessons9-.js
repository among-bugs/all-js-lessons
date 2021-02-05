"use-strict";

// 9.Операторы в JS
const all = `arr` + ` - object`;
// const intPlusStr = 5 + +`5`;
// console.log(all, `and`, typeof (intPlusStr), intPlusStr);

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
            const {
                name
            } = shortIndex; // деструктуризация объектов 
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

    for (let int = 0; int < allWeapons.length; int++) {
        for (let int2 = 0; int2 < allWeapons[int].weapon.length; int2++) {
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

const arr = [];

function addElementsToArr(thisArrayToAdd) {
    for (let ind = 0; ind < 10; ind++) {
        thisArrayToAdd.push(ind);
    }
}


function dropAllDataFromArr(thisArrToDrop) {
    for (let ind = thisArrToDrop.length; ind > 0; ind--) {
        thisArrToDrop.pop();
    }
}

function showWithCiclesFromArr(selectedArr) {
    for (let ind = 0; ind < selectedArr.length; ind++) {
        console.log(selectedArr[ind]);
    }
}

addElementsToArr(arr);

arr.forEach(function (value, index, thisArray) {
    console.log(`${index}-element is '${value}' (${thisArray})`);
});


function checkThreeMethods() {
    let arrToCheckSplit = [],
        joinArrElements, sortedElements;
    for (let indx = 0; indx < allProfiles.length; indx++) {
        arrToCheckSplit.push(`${allProfiles[indx].name}`);
    }
    sortedElements = arrToCheckSplit.sort(); // firstable we have to sort array elements,
    //after, we might join all these elements to one string.
    joinArrElements = sortedElements.join(', '); // like this one
    return console.log(joinArrElements);
}


// pushAllProfilesDetails();
// checkThreeMethods();

let str = "asd, dsa, qwer, asd, ddd, aas, ass, boob";

let allNames = str.split(", ");

function forPractice() {

    let profiles = [],
        sortedProfiles, toJoin = [];

    for (let indy = 0; indy < Base.questions.length; indy++) {

        profiles[indy] = prompt(Base.questions[0], '');
    }
    sortedProfiles = profiles.sort();
    toJoin = sortedProfiles.join();
    return console.log(toJoin);
}


// showArrayDirs(arr);

// function showArrayDirs(thisArray) {copiedObj[key] = main[key];
//22.  Передача по ссылке или по значени

const firstObj = {
    a: 15,
    b: 20
};

// const copiedObj = firstObj;

// copiedObj.a = 20;

// console.log(copiedObj);
// console.log(firstObj);

function copy(main) {
    let copiedObj = {};
    for (let key in main) {
        // if (typeof(main[key]) === "object") {
        //     for (let keyIn in main[key]) {
        //         copiedObj[key][keyIn] = main[key][keyIn];
        //     }
        // } else {
        copiedObj[key] = main[key];
    }
    return copiedObj;
}

const mainObj = {
    a: 5,
    b: 3,
    c: {
        ca: 6,
        cb: 7
    }
};

const copiedObj = copy(mainObj);

console.log(mainObj);
console.log(copiedObj);

copiedObj.a = 256;
mainObj.c.ca = 254;
console.log(mainObj);
console.log(copiedObj);

const addingObj = {
    e: 12,
    f: 25,
    g: 45,
    h: `last`
};

// const modifiedMainObj = Object.assign(mainObj, addingObj);

// console.log(modifiedMainObj);

const clone = Object.assign({}, addingObj);
clone.e++;

console.log(addingObj);
console.log(clone);

const baseArr = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`];

function addElementsToFirstArr(thisFirstArr) {
    for (let ind = 0; ind < baseArr.length; ind++) {
        thisFirstArr[ind] = baseArr[ind] + ind;
    }
    return thisFirstArr;
}
let firstArr = [];
addElementsToFirstArr(firstArr);

let lastArr = firstArr.slice();

function addElementsToArrBack(thisLastArr) {
    let reversedBaseArr = baseArr.reverse(); //to reverse all elements from last array
    for (let ind = 0; ind < thisLastArr.length; ind++) {
        thisLastArr[ind] += reversedBaseArr[ind];
    }
    return thisLastArr;
}

console.log(firstArr);
addElementsToArrBack(lastArr);
console.log(lastArr);

let all_ = [`first`, `last`, `asd`, `qwerty`];


function showLog(first, last, asd, qwerty) {
    console.log(`first:${first}, last:${last}, asd:${asd}, qwerty:${qwerty}`);
}

console.log(showLog(...all_)); //Spread operator

const newCopyAll_ = [...all_]; //get copy with spread operator

let thiss = function () {
    for (let key of newCopyAll_) {
        console.log(key);
    }
};
console.log(thiss());

//////////////////////
//26. 
const thisStr = '26';
console.log(typeof (Number(thisStr)));
console.log(typeof (+thisStr));

function switcher(moment) {
    if (moment) {
        console.log(`working...`);
    }
}

// switcher(null);

switcher(1);

///28. 

// const firstButton = document.getElementById('firstButton');

// console.log(firstButton);

const allButtons = document.querySelectorAll('button');
allButtons.forEach(function (item, i) {
    console.log(i + 1, item);
});

// document.getElementsByTagName('button');
// console.log(allButtons[0]);
// console.log(showAllButtonElements(allButtons));

// function showAllButtonElements(thisAllButtons) {
//     for (let ind = 0; ind < thisAllButtons.length; ind++ ) {
//         console.log(thisAllButtons[ind]);
//     }       
// }

const sultan = document.createElement('sultan');
// sultan.classList.add('black');
sultan.className = "black";
document.body.append(sultan);
// document.body.prepend(sultan);

allButtons[14].after(sultan);

sultan.textContent = "I'm Sultan";
sultan.style.fontSize = "24px";
sultan.style.fontStyle = "italic";

sultan.insertAdjacentHTML('beforebegin', '<br><h2>HELLO</h2>');


const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

function setColorsForAllButtons() {
    allButtons.forEach((item, i) => {
        item.type = "button";
        item.className = `btn btn-outline-${colors[Math.floor(Math.random() * 6)]}`;
        item.id = `button${i}`;
        item.style.width = '50px';
        item.style.height = '50px';
        // let numberIndex = 
        // document.getElementById(item.id).innerHTML = `${i+1}`;
    });
    let button13 = document.getElementById('button13');
    button13.style.width = '104px';
    button13.style.height = '50px';
}
// setColorsForAllButtons();
// number1.onclick = function() {
// alert(parseInt(number1.textContent));
// };

const color = ['white', 'black', 'red', 'blue', 'green', 'yellow', 'brown'];

function hoveMouse(SetColorClassForAllBtns) {
    SetColorClassForAllBtns();
    allButtons.forEach((item, i) => {
        let thisnumb = parseInt(allButtons[i].textContent);
        item.addEventListener('mouseenter', function (thisEvent) { // .target used only with event!!!
            item.className = `btn btn-outline-${colors[Math.floor(Math.random() * 6)]}`;
            console.log(`id = ${item.id},  text content = ${
                thisEvent.target.textContent}, className = ${
                    thisEvent.target.className}`);
        });
        item.addEventListener('click', (thisEventToClick) => {
            console.log(thisEventToClick.target.id + ' is clicked!');
            // document.querySelector('input').value = `${parseInt(thisEventToClick.target.textContent)}`;
        });
    });
}

hoveMouse(setColorsForAllButtons);


// number1.addEventListener('click', function() {
//     alert(thisnumb++);
// });

// allButtons[8].addEventListener('mouseenter', hoveMouse);