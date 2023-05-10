type Crush = {
  name: string;
  age?: number; // optional type
  profession: string;
  address: string;
  isCrushMarried: CrushMarried;
};

type CrushMarried = boolean;

const crush: Crush = {
  name: "Aditi Rao Hydari",
  profession: "Acctress",
  address: "India",
  isCrushMarried: false,
};

console.log(crush);

type Operation = (number1: number, number2: number) => number;

const calculate = (number1: number, number2: number, operation: Operation): number => {
  return operation(number1, number2);
};

calculate(10, 20, (number1, number2) => number1 + number2);
calculate(10, 20, (number1, number2) => number1 - number2);
