"use strict";
let ass;
ass = "Next Level Web Development";
ass.length;
function kgToGram(kg) {
    if (typeof kg === "string") {
        const gm = parseFloat(kg) * 1000;
        return `${gm} gm`;
    }
    else if (typeof kg === "number") {
        const gm = kg * 1000;
        return gm;
    }
}
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram("1000");
try {
}
catch (error) {
    console.log(error.message);
}
