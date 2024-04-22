export default function createIteratorObject(report) {
  // Generator function to yield each employee from every department
  function* iterateEmployees(report) {
    for (const department in report.allEmployees) {
      const employees = report.allEmployees[department];
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  // Return the iterator object
  return {
    [Symbol.iterator]() {
      return iterateEmployees(report);
    }
  };
}
