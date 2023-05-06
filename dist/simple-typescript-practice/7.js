"use strict";
// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
const arrOfNumbers = [1, 2, 3, 4, 5];
const findMinMax = (...numbers) => {
    const minimum = Math.min(...numbers);
    const maximum = Math.max(...numbers);
    //   return { minimum, maximum };
    return [minimum, maximum];
};
// const { minimum: min, maximum: max } = findMinMax(...arrOfNumbers);
const [min, max] = findMinMax(...arrOfNumbers);
console.log(min, max);
