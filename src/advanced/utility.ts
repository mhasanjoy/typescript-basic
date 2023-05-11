// Pick
export interface Person {
  name: string;
  email?: string;
  contactNo: string;
}
type Contact = Pick<Person, "email" | "contactNo">;

// Omit
type Name = Omit<Person, "email" | "contactNo">;

// Partial
//  to make all the properties optional
type Optional = Partial<Person>;

// Required
type RequiredProps = Required<Person>;

// Readonly
const person: Readonly<Person> = {
  name: "Joy",
  email: "joy@gmail.com",
  contactNo: "133013",
};
// person.name = 'Md. Mehedi Hasan';

// Record
// interface Obj {
//   a: string;
//   b: string;
//   c: string;
// }

// using index signature
// interface Obj {
//   [index: string]: string;
//   //   [index: "a" | "b" | "c"]: string;
// }

// type Obj = Record<string, string>;
type Obj = Record<"a" | "b" | "c", string>;

const myObj: Obj = {
  a: "1",
  b: "2",
  c: "3",
  //   d: 4
};
