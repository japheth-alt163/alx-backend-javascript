// full_server/utils.js

import fs from 'fs/promises';

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');
    const students = {};

    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export { readDatabase };
