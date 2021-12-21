"use strict";
// any, string, number, boolean, tuple, undefined, null, void, never, unknown
const myName = "Md. Mehedi Hasan"; // type inference
let age = 25; // type annotation
let isHungry = true;
let studentId = 232;
studentId = "web3-0232";
let gameDirection = "top";
let person = {
    name: "Md. Mehedi Hasan",
    age: 25,
    hobby: "sleeping",
};
// array
const numbers = [45, 52, 43, 63, 47];
const persons = [
    person,
    {
        name: "Rasel",
        age: 25,
    },
];
// function
const greetings = (name) => {
    console.log(`Hello, ${name}.`);
};
greetings("Joy");
const introduce = ({ name, hobby }) => {
    console.log(`Hello, my name is ${name} & my hobby is ${hobby}.`);
};
introduce(person);
// generic
const getArray = (arr) => {
    return arr;
};
getArray(["Joy", "Rasel", "Riad"]);
getArray([1, 5, 7]);
// enum
var Week;
(function (Week) {
    Week["Sat"] = "Saturday";
    Week["Sun"] = "Sunday";
    Week["Mon"] = "Monday";
    Week["Tue"] = "Tuesday";
    Week["Wed"] = "Wednesday";
    Week["Thu"] = "Thursday";
    Week["Fri"] = "Friday";
})(Week || (Week = {}));
console.log(Week.Sun);
