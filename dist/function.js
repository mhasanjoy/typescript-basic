"use strict";
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 3);
const addition = (num1, num2) => num1 + num2;
const array = [1, 3, 5];
const newArray = array.map((element) => element * element);
const person = {
    name: "John",
    balance: 500,
    addBalance(money) {
        return this.balance + money;
    },
};
const friends = ["Chandler", "Joey", "Ross"];
const newFriends = ["Monica", "Rachel", "Phoebe"];
friends.push(...newFriends);
console.log(friends);
// const greetFriends = (friend1: string, friend2: string, friend3: string): void =>
//   console.log(`Hi ${friend1}\nHi ${friend2}\nHi ${friend3}`);
const greetFriends = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends("Rasel", "Sobuj", "Rabbi", "Khalid");
const [bestFriend] = friends;
console.log(bestFriend);
const myBestFriend = {
    fullName: "Md. Mehedi Hasan",
    age: 27,
};
const { fullName } = myBestFriend;
console.log(fullName);
// Quiz
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
