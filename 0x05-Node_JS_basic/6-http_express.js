const express = require('express');

// Create an Express application
const app = express();

// Define routes and middleware
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
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
