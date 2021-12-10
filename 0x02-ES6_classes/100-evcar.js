import Car from './10-car';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["cloneCar"] }] */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return Car.prototype.cloneCar();
  }
}
