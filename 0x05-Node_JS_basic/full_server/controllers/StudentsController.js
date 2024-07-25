const readDatabase = require('../utils');

class StudentsController {
  /**
   * Handles the request to get all students
   * @param {Object} request - The request object
   * @param {Object} response - The response object
   */
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2].toString());
      const output = ['This is the list of our students'];
      
      const keys = Object.keys(students);
      keys.sort();

      keys.forEach(key => {
        output.push(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`);
      });

      response.status(200).send(output.join('\n'));
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }

  /**
   * Handles the request to get students by major
   * @param {Object} request - The request object
   * @param {Object} response - The response object
   */
  static async getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    const validMajors = ['CS', 'SWE'];

    if (!validMajors.includes(major)) {
      return response.status(400).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(process.argv[2].toString());

      if (!students[major]) {
        return response.status(404).send(`No students found for major: ${major}`);
      }

      response.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
