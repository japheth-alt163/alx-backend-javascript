const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Route to handle the homepage
router.get('/', AppController.getHomepage);

// Route to get all students
router.get('/students', StudentsController.getAllStudents);

// Route to get students by major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
