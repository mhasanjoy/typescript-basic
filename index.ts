// any, string, number, boolean, tuple, undefined, null, void, never, unknown
const myName = "Md. Mehedi Hasan"; // type inference
let age: number = 25; // type annotation
let isHungry: boolean = true;

// type alias
type StringOrNumber = number | string;
let studentId: StringOrNumber = 232;
studentId = "web3-0232";

// literal type
type direction = "top" | "bottom" | "left" | "right";
let gameDirection: direction = "top";

// object
interface Person {
  name: string;
  age: number;
  hobby?: string;
}
let person: Person = {
  name: "Md. Mehedi Hasan",
  age: 25,
  hobby: "sleeping",
};

// array
const numbers: number[] = [45, 52, 43, 63, 47];
const persons: Person[] = [
  person,
  {
    name: "Rasel",
    age: 25,
  },
];

// function
const greetings = (name: string): void => {
  console.log(`Hello, ${name}.`);
};
greetings("Joy");

const introduce = ({ name, hobby }: Person): void => {
  console.log(`Hello, my name is ${name} & my hobby is ${hobby}.`);
};
introduce(person);

// generic
const getArray = <T>(arr: T[]): T[] => {
  return arr;
};
getArray<string>(["Joy", "Rasel", "Riad"]);
getArray<number>([1, 5, 7]);

// enum
enum Week {
  Sat = "Saturday",
  Sun = "Sunday",
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
}
console.log(Week.Sun);
