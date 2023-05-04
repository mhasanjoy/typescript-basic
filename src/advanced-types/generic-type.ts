type GenericArray<T> = Array<T>;

const rollNumbers1: GenericArray<number> = [1, 3, 5];
const rollNumbers2: GenericArray<string> = ["1", "3", "5"];
const rollNumbers3: GenericArray<boolean> = [true, false];

interface INameAndRoll {
  name: string;
  roll: number;
}
const userNameAndRoll: GenericArray<INameAndRoll> = [
  {
    name: "Mr. X",
    roll: 1,
  },
  {
    name: "Mr. Y",
    roll: 2,
  },
];

type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["Joy", "Aditi Rao Hydari"];

interface IRelationWithSalary {
  name: string;
  salary: number;
}
const relationWithSalary: GenericTuple<IRelationWithSalary, string> = [
  {
    name: "Joy",
    salary: 25000,
  },
  "Aditi Rao Hydari",
];
