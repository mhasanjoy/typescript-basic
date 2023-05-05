// keyof guard
type Alphanumeric = string | number;
function summation(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// in guard
interface INormalUser {
  name: string;
}
interface IAdminUser {
  name: string;
  role: "admin";
}
const normalUser1: INormalUser = {
  name: "Mr. X",
};
const adminUser1: IAdminUser = {
  name: "Mr. Admin",
  role: "admin",
};
function getUser(user: INormalUser | IAdminUser): string {
  if ("role" in user) {
    return `${user.name} is an ${user.role}`;
  } else {
    return `${user.name} is a normal user`;
  }
}

// instanceof guard
class Creature {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound(): void {
    console.log("I'm making sound");
  }
}
class Dog extends Creature {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark(): void {
    console.log("I'm barking");
  }
}
class Cat extends Creature {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw(): void {
    console.log("meaw meaw");
  }
}
const animal1: Dog = new Dog("German Shepard", "dog");
const animal2: Cat = new Cat("Persian", "cat");

// function getAnimal(animal: Creature): void {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }

function isDog(animal: Creature): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: Creature): animal is Cat {
  return animal instanceof Cat;
}
function getAnimal(animal: Creature): void {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}
