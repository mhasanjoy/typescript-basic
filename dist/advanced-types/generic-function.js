"use strict";
const createArray = (param1, param2) => {
    return [param1, param2];
};
const result1 = createArray("Bangladesh", "I love");
const result2 = createArray(false, ["USA"]);
const result3 = createArray({ name: "Bangladesh" }, false);
const myInfo = {
    name: "Joy",
    age: 27,
    salary: 25000,
    hobby: "Football",
};
const addMeInMyInfatuationMind = (myInfo) => {
    const infatuation = "Aditi Rao Hydari";
    const newData = Object.assign(Object.assign({}, myInfo), { infatuation });
    return newData;
};
const result4 = addMeInMyInfatuationMind(myInfo);
