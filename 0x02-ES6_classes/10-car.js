// 10-car.js

const carData = Symbol('carData');

class Car {
  constructor(brand, motor, color) {
    this[carData] = {
      brand: brand,
      motor: motor,
      color: color
    };
  }

  // Getter for brand attribute
  get brand() {
    return this[carData].brand;
  }

  // Getter for motor attribute
  get motor() {
    return this[carData].motor;
  }

  // Getter for color attribute
  get color() {
    return this[carData].color;
  }

  // Method to clone the car
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}

export default Car;
