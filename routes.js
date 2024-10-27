const express = require('express');
const Student = require('./models/student');
const Project = require('./models/project');

const router = express.Router();

// Add a new student
router.post('/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).send(student);
});

// Add a new project
router.post('/projects', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).send(project);
});


router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve students' });
  }
});

// Get all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve projects' });
  }
});
module.exports = router;
