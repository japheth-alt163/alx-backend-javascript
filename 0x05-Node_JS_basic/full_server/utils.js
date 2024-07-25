const { promises: fs } = require('fs');

module.exports = async function readDatabase(filePath) {
  const students = {};

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n');
    const noHeader = lines.slice(1);

    noHeader.forEach(line => {
      if (line) {
        const fields = line.split(',').map(field => field.trim());
        if (fields.length > 3) { // Ensuring the row has at least 4 fields
          const course = fields[3];
          const student = fields[0];

          if (students[course]) {
            students[course].push(student);
          } else {
            students[course] = [student];
          }
        }
      }
    });

    return students;
  } catch (err) {
    throw new Error(`Error reading file: ${err.message}`);
  }
};
