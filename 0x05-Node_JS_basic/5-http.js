const http = require('http');
const url = require('url');
const fs = require('fs').promises; // Using fs.promises for async file reading
const { countStudents } = require('./3-read_file_async'); // Import countStudents function

// Function to handle HTTP requests
async function handleRequest(req, res) {
  // Parse request URL
  const parsedUrl = url.parse(req.url, true);
  
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Handle requests based on path
  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!\n');
  } else if (parsedUrl.pathname === '/students') {
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

      // Log the total number of students
      res.write(`Number of students: ${totalStudents}\n`);

      // Log the number of students in each field
      for (const field in students) {
        res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`);
      }

      res.end();
    } catch (error) {
      res.end(`Error: ${error.message}\n`);
    }
  } else {
    // Handle other paths with a 404 Not Found response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
}

// Create HTTP server
const app = http.createServer(handleRequest);

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app variable (HTTP server)
module.exports = app;
