"use strict";
// Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.
const stringConversion = (param1, param2) => {
    if (param2) {
        console.log(param1.toUpperCase());
    }
    else {
        console.log(param1.toLowerCase());
    }
};
stringConversion("blue");
