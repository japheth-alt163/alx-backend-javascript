const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      const fields = {};
      const lines = data.trim().split('\n');
      let totalStudents = 0;

      for (const line of lines.slice(1)) { // Skip the header line
        if (line.trim()) {
          totalStudents += 1;
          const [firstname, , , field] = line.split(',');

          if (!students[field]) {
            students[field] = [];
            fields[field] = 0;
          }

          students[field].push(firstname);
          fields[field] += 1;
        }
      }

      let output = `Number of students: ${totalStudents}\n`;
      for (const [field, count] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${count}. List: ${students[field].join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    response.status(500).send('Database not provided');
    return;
  }

  countStudents(databasePath)
    .then((output) => {
      response.set('Content-Type', 'text/plain');
      response.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      response.status(500).send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
