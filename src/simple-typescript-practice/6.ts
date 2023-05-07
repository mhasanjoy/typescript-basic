// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface IPerson {
  name: string;
  age: number;
  email: string;
}

const arrayOfPerson: IPerson[] = [
  {
    name: "Joy",
    age: 28,
    email: "m.hasanjoy13@gmail.com",
  },
  {
    name: "Salman",
    age: 25,
    email: "salman@dymesoft.com",
  },
  {
    name: "Subho",
    age: 27,
    email: "subho@dynamicsoft.us",
  },
];

const findPerson = (persons: IPerson[], email: string): IPerson | null => {
  return persons.find((person) => person.email === email) ?? null;
};

console.log(findPerson(arrayOfPerson, "salman@dymesoft.com"));
