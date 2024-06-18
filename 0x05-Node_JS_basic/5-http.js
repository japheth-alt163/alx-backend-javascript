const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
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
      let length = 0;
      const lines = data.trim().split('\n');

      for (const line of lines) {
        if (line.trim()) {
          length += 1;
          const [firstname, lastname, age, field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
            fields[field] = 0;
          }
          students[field].push(firstname);
          fields[field] += 1;
        }
      }

      let output = `Number of students: ${length - 1}\n`;
      for (const [key, value] of Object.entries(fields)) {
        output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
      }
      resolve(output.trim());
    });
  });
}

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.setHeader('Content-Type', 'text/plain');
    countStudents(process.argv[2])
      .then((output) => {
        response.statusCode = 200;
        response.end(`This is the list of our students\n${output}`);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.end(err.message);
      });
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
