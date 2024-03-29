class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours} hours`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student = new Student("Mr. X", 18, "Uganda");

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numOfClass: number): string {
    return `This ${this.name} will take ${numOfClass} class`;
  }
}
const teacher = new Teacher("Mr. Y", 52, "USA", "Professor");
