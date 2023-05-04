const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const result1 = createArray<string, string>("Bangladesh", "I love");
const result2 = createArray<boolean, Array<string>>(false, ["USA"]);

interface IName {
  name: string;
}
const result3 = createArray<IName, boolean>({ name: "Bangladesh" }, false);

// Spread Operator
interface IMyInfo extends IConstraint {
  //   name: string;
  //   age: number;
  //   salary: number;
  hobby: string;
}
const myInfo: IMyInfo = {
  name: "Joy",
  age: 27,
  salary: 25000,
  hobby: "Football",
};

interface IConstraint {
  name: string;
  age: number;
  salary: number;
}
const addMeInMyInfatuationMind = <T extends IConstraint>(myInfo: T) => {
  const infatuation = "Aditi Rao Hydari";
  const newData = { ...myInfo, infatuation };
  return newData;
};
const result4 = addMeInMyInfatuationMind<IMyInfo>(myInfo);
