// full_server/server.js

import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import router from './routes';

const app = express();
const PORT = 1245;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', router);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error\n');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

export default app;
