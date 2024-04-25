import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for range attribute
  get range() {
    return this._range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Create a new instance of Car with the same attributes
    return new Car(this.brand, this.motor, this.color);
  }
}

export default EVCar;
