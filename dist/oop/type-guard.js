"use strict";
function summation(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
const normalUser1 = {
    name: "Mr. X",
};
const adminUser1 = {
    name: "Mr. Admin",
    role: "admin",
};
function getUser(user) {
    if ("role" in user) {
        return `${user.name} is an ${user.role}`;
    }
    else {
        return `${user.name} is a normal user`;
    }
}
// instanceof guard
class Creature {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I'm making sound");
    }
}
class Dog extends Creature {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("I'm barking");
    }
}
class Cat extends Creature {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaw() {
        console.log("meaw meaw");
    }
}
const animal1 = new Dog("German Shepard", "dog");
const animal2 = new Cat("Persian", "cat");
// function getAnimal(animal: Creature): void {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}
