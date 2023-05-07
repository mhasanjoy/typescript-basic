interface ICrush<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush1: ICrush<boolean, string> = {
  name: "Aditi Rao Hydari",
  husband: false,
  wife: "searching...",
};
const crush2: ICrush<string> = {
  name: "Aditi Rao Hydari",
  husband: "Joy",
};

interface IHusband {
  name: string;
  salary: number;
}
const crush3: ICrush<IHusband> = {
  name: "Aditi Rao Hydari",
  husband: {
    name: "Joy",
    salary: 25000,
  },
};

interface IPerson1 {
  name: string;
  age: number;
}
const crush4: ICrush<IPerson1, IPerson1> = {
  name: "Aditi Rao Hydari",
  husband: {
    name: "Joy",
    age: 28,
  },
  wife: {
    name: "Searching...",
    age: 23,
  },
};
