type User = {
  name: string;
  age: number;
};
interface IUser {
  name: string;
  age: number;
}

type extendedUser = User & {
  role: string;
};
interface IExtendedUser extends IUser {
  role: string;
}

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 100,
};
const userWithInterface: IUser = {
  name: "Interface",
  age: 200,
};

type rollNumber = number;

type addNumbersType = (num1: number, num2: number) => number;
interface IAddNumbers {
  (num1: number, num2: number): number;
}
const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;

type rollNumbersType = string[];
interface IRollNumbers {
  [index: number]: string;
}
const rollNumbers: IRollNumbers = ["1", "3", "5"];
