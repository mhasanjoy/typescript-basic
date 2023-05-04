"use strict";
const a = "name";
const b = "address";
function getProperty(obj, key) {
    return obj[key];
}
const property = getProperty({ name: "Mr. X", age: 22 }, "name");
