// interface
// interface IVehicle {
//   name: string;
//   model: string;
// }
// const vehicle: IVehicle = {
//   name: "Car",
//   model: "2000",
// };

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}
class Vehicle implements IVehicle {
  constructor(public name: string, public brand: string, public model: number) {}

  startEngine(): void {
    console.log("I'm starting engine...");
  }
  stopEngine(): void {
    console.log("I'm stopping engine...");
  }
  move(): void {
    console.log("I'm moving the vehicle...");
  }
  test() {
    console.log("I'm for testing purpose...");
  }
}
const vehicle1 = new Vehicle("Car", "Toyota", 2000);

// abstract class
abstract class Automobile {
  constructor(public name: string, public brand: string, public model: number) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log("I'm moving the vehicle...");
  }
}
// const car1 = new Automobile('Car', 'BMW', 2015);
class Car extends Automobile {
  startEngine(): void {
    console.log("I'm starting engine...");
  }
  stopEngine(): void {
    console.log("I'm stopping engine...");
  }
}
