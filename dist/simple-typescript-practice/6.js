"use strict";
// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
const arrayOfPerson = [
    {
        name: "Joy",
        age: 28,
        email: "m.hasanjoy13@gmail.com",
    },
    {
        name: "Salman",
        age: 25,
        email: "salman@dymesoft.com",
    },
    {
        name: "Subho",
        age: 27,
        email: "subho@dynamicsoft.us",
    },
];
const findPerson = (persons, email) => {
    var _a;
    return (_a = persons.find((person) => person.email === email)) !== null && _a !== void 0 ? _a : null;
};
console.log(findPerson(arrayOfPerson, "salman@dymesoft.com"));
