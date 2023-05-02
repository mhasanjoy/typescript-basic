// Ternary Operator
const age: number = 27;
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// Nullish Coalescing Operator
const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";

console.log({ userName }, { userName2 });

type Human = {
  name: string;
  age: number;
  address: {
    city: string;
    road: string;
    home?: string;
  };
};

const mehedi: Human = {
  name: "mehedi",
  age: 27,
  address: {
    city: "No City",
    road: "No Road",
  },
};

const home = mehedi.address.home ?? "No Home";

console.log(home);
