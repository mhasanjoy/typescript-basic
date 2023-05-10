"use strict";
var _a;
// Ternary Operator
const age = 27;
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);
// Nullish Coalescing Operator
const isAuthenticatedUser = "";
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ userName }, { userName2 });
const mehedi = {
    name: "mehedi",
    age: 27,
    address: {
        city: "No City",
        road: "No Road",
    },
};
const home = (_a = mehedi.address.home) !== null && _a !== void 0 ? _a : "No Home";
console.log(home);
