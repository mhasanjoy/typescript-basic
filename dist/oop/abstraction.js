"use strict";
// interface
// interface IVehicle {
//   name: string;
//   model: string;
// }
// const vehicle: IVehicle = {
//   name: "Car",
//   model: "2000",
// };
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("I'm starting engine...");
    }
    stopEngine() {
        console.log("I'm stopping engine...");
    }
    move() {
        console.log("I'm moving the vehicle...");
    }
    test() {
        console.log("I'm for testing purpose...");
    }
}
const vehicle1 = new Vehicle("Car", "Toyota", 2000);
// abstract class
class Automobile {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log("I'm moving the vehicle...");
    }
}
// const car1 = new Automobile('Car', 'BMW', 2015);
class Car extends Automobile {
    startEngine() {
        console.log("I'm starting engine...");
    }
    stopEngine() {
        console.log("I'm stopping engine...");
    }
}
