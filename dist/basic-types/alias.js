"use strict";
const crush = {
    name: "Aditi Rao Hydari",
    profession: "Acctress",
    address: "India",
    isCrushMarried: false,
};
console.log(crush);
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (number1, number2) => number1 + number2);
calculate(10, 20, (number1, number2) => number1 - number2);
