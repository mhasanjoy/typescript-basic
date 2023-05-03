let ass: any;
ass = "Next Level Web Development";
(ass as string).length;

function kgToGram(kg: string | number): string | number | undefined {
  if (typeof kg === "string") {
    const gm = parseFloat(kg) * 1000;
    return `${gm} gm`;
  } else if (typeof kg === "number") {
    const gm = kg * 1000;
    return gm;
  }
}
const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = <string>kgToGram("1000");

type CustomError = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomError).message);
}
