const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/taskController');

router.get('/tasks', getTasks);
router.post('/task', createTask);

module.exports = router;
