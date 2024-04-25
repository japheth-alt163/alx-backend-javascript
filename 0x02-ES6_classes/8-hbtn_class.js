class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size attribute
  get size() {
    return this._size;
  }

  // Getter for location attribute
  get location() {
    return this._location;
  }

  // Custom behavior when cast into a Number
  valueOf() {
    return this._size;
  }

  // Custom behavior when cast into a String
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
