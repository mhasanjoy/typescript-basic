export const multiply = (number1: number, number2: number): number => {
  return number1 * number2;
};

const divide = (number1: number, number2: number): number => {
  return number1 / number2;
};

const average = (number1: number, number2: number): number => {
  return (number1 + number2) / 2;
};

// export default divide;
export default {
  divide,
  average,
};
