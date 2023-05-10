function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(2, 3);

const addition = (num1: number, num2: number): number => num1 + num2;

const array: number[] = [1, 3, 5];

const newArray: number[] = array.map((element: number) => element * element);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "John",
  balance: 500,
  addBalance(money: number): number {
    return this.balance + money;
  },
};

const friends: string[] = ["Chandler", "Joey", "Ross"];
const newFriends: string[] = ["Monica", "Rachel", "Phoebe"];

friends.push(...newFriends);
console.log(friends);

// const greetFriends = (friend1: string, friend2: string, friend3: string): void =>
//   console.log(`Hi ${friend1}\nHi ${friend2}\nHi ${friend3}`);
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
greetFriends("Rasel", "Sobuj", "Rabbi", "Khalid");

const [bestFriend] = friends;
console.log(bestFriend);

const myBestFriend: {
  fullName: string;
  age: number;
} = {
  fullName: "Md. Mehedi Hasan",
  age: 27,
};
const { fullName } = myBestFriend;
console.log(fullName);

// Quiz
function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
