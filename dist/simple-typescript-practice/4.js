"use strict";
// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
const productsArray = [
    ["Realme c21y", 12700, 1],
    ["M70", 700, 2],
];
const totalCost = (products) => {
    let cost = 0;
    products.map((product) => (cost = cost + product[1] * product[2]));
    return cost;
};
console.log(totalCost(productsArray));
