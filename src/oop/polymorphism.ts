class Man {
  takeNap(): void {
    console.log("I'm sleeping 8 hours per day");
  }
}
class Fresher extends Man {
  takeNap(): void {
    console.log("I'm sleeping 10 hours per day");
  }
}
class Developer extends Man {
  takeNap(): void {
    console.log("I'm sleeping 6 hours per day");
  }
}

function getNap(param: Man): void {
  param.takeNap();
}
const person1 = new Man();
const person2 = new Fresher();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(param: Shape): void {
  console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(12, 8));
