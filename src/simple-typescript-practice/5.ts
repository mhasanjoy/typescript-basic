// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

const numbersArray: number[] = [1, 2, 3, 4, 5, 6];

const sumOfNumbers = (numbers: number[]): number => {
  let sum: number = 0;
  numbers.map((number) => number % 2 === 0 && (sum = sum + number));
  return sum;
};

console.log(sumOfNumbers(numbersArray));
