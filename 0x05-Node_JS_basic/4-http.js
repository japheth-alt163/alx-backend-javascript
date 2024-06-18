const http = require('http');

// Create HTTP server
const app = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Respond with "Hello Holberton School!" for any endpoint
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app variable (HTTP server)
module.exports = app;
