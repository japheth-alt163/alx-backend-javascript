const express = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
