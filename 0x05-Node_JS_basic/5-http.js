const http = require('http');
const { readFile } = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

async function countStudents(fileName) {
  try {
    const data = await readFile(fileName, 'utf-8');
    const lines = data.split('\n').filter(line => line);
    const students = {};
    const fields = {};

    lines.slice(1).forEach(line => {
      const [firstName, , , field] = line.split(',');
      if (field) {
        if (!students[field]) students[field] = [];
        students[field].push(firstName);

        if (!fields[field]) fields[field] = 0;
        fields[field] += 1;
      }
    });

    let output = `Number of students: ${lines.length - 1}\n`;
    for (const [field, count] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${count}. List: ${students[field].join(', ')}\n`;
    }

    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    try {
      const output = await countStudents(process.argv[2]);
      response.end(`This is the list of our students\n${output}`);
    } catch (err) {
      response.statusCode = 500;
      response.end(err.message);
    }
  } else {
    response.statusCode = 404;
    response.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
