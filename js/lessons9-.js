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

