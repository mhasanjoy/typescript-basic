interface IHuman {
  name: string;
  age: number;
  address: string;
}

type newType = "name" | "age" | "address";
type newTypeUsingKeyOf = keyof IHuman;

const a: newType = "name";
const b: newTypeUsingKeyOf = "address";

function getProperty<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
  return obj[key];
}
const property = getProperty({ name: "Mr. X", age: 22 }, "name");
