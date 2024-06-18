const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split data into lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Remove the header line
      lines.shift();

      // Initialize counters
      const students = {};
      let totalStudents = 0;

      // Parse each line
      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents++;
      });

      // Log the total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field
      for (const field in students) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
