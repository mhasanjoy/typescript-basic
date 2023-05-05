"use strict";
class Man {
    takeNap() {
        console.log("I'm sleeping 8 hours per day");
    }
}
class Fresher extends Man {
    takeNap() {
        console.log("I'm sleeping 10 hours per day");
    }
}
class Developer extends Man {
    takeNap() {
        console.log("I'm sleeping 6 hours per day");
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Man();
const person2 = new Fresher();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(12, 8));
