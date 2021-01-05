"use strict";

let str = "some string";
window.alert(str);

// 5.Переменные и строгие типы

let number = 50;
const constante = 10;

number = 40;
console.log(number, constante);

const object = {
    a: 1,
    b: 2,
    c: 3
};

console.log(object.a + object.b + object.c);

console.log(example1);

var example1 = "first";
let example2 = "last";

console.log(example1, example2);

function Stepen(x, n) {
    let result = 1;

    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(Stepen(2, 5));

// 6.Классификация типов данных в JavaScript

////// 6.1 Простые типы данных 

let number2 = 26;
console.log(number2 / 0, 'str' * number2);

const personalNumber = '27';
const boolean = true;

let undef;
console.log(undef);

// Объекты

const objectAyan = {
    name: "Ayan",
    age: 17,
    isDebil: false
};

console.log("name: " + objectAyan.name,
    ", age: " + objectAyan.age,
    ", is debil: " + objectAyan.isDebil);

let Arr = [
    objectAyan.name,
    objectAyan.age,
    objectAyan.isDebil,
    "second",
    {
        study: 2021,
        ent: true,
        math: "yes"
    },
    {
        email: "ayangali.zv@gmail.com",
        phoneNumber: 87775620058
    }
];

if (objectAyan.isDebil != true) {
    console.log(Arr[0], "Obsidian", Arr[5].email, Arr[5].phoneNumber);
} else {
    console.log('Ayan is Smart');
}

// 7. Простое общение с пользователем
const answer = "Are u debil?";
const result = confirm(answer);
const result2 = prompt(answer, "yeah!");

if (result2 == "yeah!") {
    console.log(result2 + ", you r debil!");
} else if (result2 == "nope!") {
    console.log(result2 + ", okay, you r smart!");
} else {
    console.log(typeof (result2) + ", " +
        result2 + " is not answer! please, try again!");
}

let exampleObjects = [
    [`Sultan`, 22, `Aralsk`, `sultanscreed@gmail.com`, 87025588547],
    [`Ayan`, 16, `Aralsk`, `ayangali.zv@gmail.com`, 87775620058],
    [`Madina`, 24, `Karaganda`, `madin@gmail.com`, 87753951700],
];

let questions = [];
questions[0] = "Who are u?";
questions[1] = "How old?";
questions[2] = "Where are u from?";
questions[3] = "Your email?";
questions[4] = "Your phone number?";

let answers = [];
let personals = [];

for (let personalN = 0; personalN < 3; personalN++) {

    for (let index = 0; index < questions.length; index++) {

        window.alert(`Please, answer to question ${questions[index]}`);
        answers[index] = prompt(questions[index], `${exampleObjects[personalN][index]}`);
    }
    personals[personalN] = {
        name: answers[0],
        age: answers[1],
        place: answers[2],
        email: answers[3],
        phone: answers[4]
    };
}

console.log(typeof (answers));

let lastStr = "R u confirm?";
const isChecked = confirm(lastStr);
if (isChecked == true) {
    console.log("ok, u r confirm");
} else {
    console.log("ok, u r not confirm");
}

// 8. Интерполяция
const cars = "nissan";
let url = (`https://www.cars.com/${cars}`);
console.log(url.concat("/all_nissan"));

for (let i = 0; i < 3; i++) {
    console.log(`Hi, ${personals[i].name}`);

    const answer = (`Your email is ${personals[i].email}?`);
    let userIsConfirm = confirm(answer);
    let userConfirmPhoneNumber;
    if (userIsConfirm == true) {
        const PhoneNumberAnswer = (`okay, your phone number is ${personals[i].phone}?`);
        let userConfirmPhoneNumber = confirm(PhoneNumberAnswer);

        if (userConfirmPhoneNumber == true) {
            console.log(`Very good! Welcome ${personals[i].name}`);
        } else {
            let correctPhoneNumber = prompt("Please, type correct phone number", `maybe, ${personals[i].phone}?`);
            personals[i].phone = correctPhoneNumber;
        }
    } else {
        let correctEmail = prompt("Please, type correct email", `maybe, ${personals[i].email}?`);
        personals[i].email = correctEmail;
        const PhoneNumberAnswer = (`okay, your phone number is ${personals[i].phone}?`);
            userConfirmPhoneNumber = confirm(PhoneNumberAnswer);
        if (userConfirmPhoneNumber == true) {
            console.log(`Very good! Welcome ${personals[i].name}`);
        } else {
            let correctPhoneNumber = prompt("Please, type correct phone number", `maybe, ${personals[i].phone}?`);
            personals[i].phone = correctPhoneNumber;

            console.log("You changed your email and phone number,");
            console.log(`Your changed email is ${personals[i].email}`);
            console.log(`Your changed phone number is ${personals[i].phone}`);
        }
    } 
   //if (userIsConfirm == true && userConfirmPhoneNumber == true){
        console.log(`Dear, ${personals[i].name}. Your email and phone details not changed`);
   // }
}
console.info(`last change, ${personals[0].name}`);
console.info(`${personals[1].name}, fake it 'til u make it!`);
