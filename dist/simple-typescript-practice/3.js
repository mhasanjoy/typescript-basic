"use strict";
// You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
const filteredProductArray = (products, criterion, value) => {
    return products.filter((product) => product[criterion] === value);
};
const products = [
    {
        id: 1,
        name: "Realme c21y",
        price: 12700,
        category: "phone",
    },
    {
        id: 2,
        name: "Hp pavillion",
        price: 600000,
        category: "laptop",
    },
    { id: 3, name: "macOS", price: 150000, category: "laptop" },
    {
        id: 4,
        name: "M70",
        price: 700,
        category: "mouse",
    },
];
console.log(filteredProductArray(products, "category", "laptop"));
