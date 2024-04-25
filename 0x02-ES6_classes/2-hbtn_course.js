class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter and setter for length attribute
  get length() {
    return this._length;
  }
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter and setter for students attribute
  get students() {
    return this._students;
  }
  set students(value) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

export default HolbertonCourse;
