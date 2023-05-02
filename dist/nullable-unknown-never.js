"use strict";
const searchName = (name) => {
    if (name === null) {
        console.log("There is nothing to search.");
    }
    else {
        console.log("Searching...");
    }
};
searchName(null);
const getCarSpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600; // km/h --> m/s
        console.log(`Car speed ${convertedSpeed}`);
    }
    else if (typeof speed === "string") {
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value) * 1000) / 3600; // km/h --> m/s
        console.log(`Car speed ${convertedSpeed}`);
    }
    else {
        console.log("Wrong type");
    }
};
getCarSpeed(10);
getCarSpeed("10 km/h");
getCarSpeed(true);
function throwError(message) {
    throw new Error(message);
}
throwError("Error!");
