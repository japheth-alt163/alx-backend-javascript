// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.databaseFile);

      let response = 'This is the list of our students\n';

      // Sort fields alphabetically case insensitive
      const sortedFields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      sortedFields.forEach(field => {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Error: ${error.message}\n`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE\n');
    }

    try {
      const students = await readDatabase(req.databaseFile);
      const studentsInMajor = students[major] || [];

      const response = `List: ${studentsInMajor.join(', ')}\n`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Error: ${error.message}\n`);
    }
  }
}

export default StudentsController;
