const arrayOfNumbers: number[] = [1, 3, 5];
const arrayOfStrings: string[] = arrayOfNumbers.map((number: number) => number.toString());
console.log(arrayOfStrings);

interface IAreaNumber {
  height: number;
  width: number;
}
type x = IAreaNumber["height"]; // look up types
type y = keyof IAreaNumber;

interface IAreaString {
  height: string;
  width: string;
}

interface IAreaReadOnly {
  readonly height: number;
  readonly width: number;
}
const rectangularArea: IAreaReadOnly = {
  height: 5,
  width: 12,
};

type Area<T> = {
  //   [index in keyof IAreaNumber]: string;
  //   [index in keyof IAreaNumber]: IAreaNumber[index];
  //   [index in keyof T]: T[index];
  readonly [index in keyof T]: T[index];
};
const area1: Area<{ height: number; width: string }> = { height: 10, width: "10" };
