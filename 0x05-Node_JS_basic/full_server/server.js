const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

// Use the router for all routes defined in it
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
