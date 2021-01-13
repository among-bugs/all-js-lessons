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

switch(Numbr) {
    case 50: 
        console.log(`${Numbr} is not 50`);
        break;
    case 49:
        console.log(`${Numbr} is not 49`);
        break;
    case 1:
        console.log(`${Numbr} is true`);
        break;
    default: console.log(`okay!!!`);
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

for (let indx = 0; indx < (currentNumbr + 50); indx++){
    if (indx === 120){
        console.log(`this is favourite numb, ${indx}`);
        continue;
    }
    console.log(indx);
}