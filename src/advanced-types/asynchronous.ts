// Mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched!";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data!");
    }
  });
};
const getPromiseData = async (): Promise<void> => {
  const data = await makePromise();
  console.log(data);
};

interface IData {
  data: string;
}
const makePromiseObject = (): Promise<IData> => {
  return new Promise<IData>((resolve, reject) => {
    const data: IData = { data: "Data is fetched!" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data!");
    }
  });
};
const getPromiseDataObject = async (): Promise<IData> => {
  const data = await makePromiseObject();
  return data;
};

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};
const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};
getTodoData();
