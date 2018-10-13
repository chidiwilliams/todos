const express = require('express');

const conn = require('../config/db');

const Todo = conn.models.todo;

const router = express.Router();

router.post('/create', async (req, res) => {
  const { name, dueDate } = req.body;

  try {
    const todo = await Todo.create({
      name,
      dueDate,
    });

    res.json({ success: true, data: todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
});

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ success: true, data: todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
