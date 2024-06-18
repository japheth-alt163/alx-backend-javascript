const express = require('express');
const { countStudents } = require('./3-read_file_async'); // Import countStudents function
const fs = require('fs').promises; // Using fs.promises for async file reading

// Create an Express application
const app = express();

// Define routes and middleware
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    // Assuming the database file path is passed as a command-line argument
    const databaseFile = process.argv[2];

    // Read the database file asynchronously
    const data = await fs.readFile(databaseFile, 'utf8');

    // Parse student data
    const lines = data.split('\n').filter(line => line.trim() !== '');
    lines.shift(); // Remove header line

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

    // Prepare response
    let response = 'This is the list of our students\n';
    response += `Number of students: ${totalStudents}\n`;

    // Log the number of students in each field
    for (const field in students) {
      response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
    }

    res.send(response);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}\n`);
  }
});

// Handle 404 - Keep this as the last middleware
app.use((req, res, next) => {
  res.status(404).send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ' + req.originalUrl + '</pre></body></html>');
});

// Set up server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app variable (Express application)
module.exports = app;
