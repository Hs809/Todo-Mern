const express = require("express");
const router = express.Router();
const Todos = require("../models/todo");

router.get("/:filter", async (req, res) => {
  const filterValue = req.params.filter;
  let todos;
  try {
    switch (filterValue) {
      case "completed":
        todos = await Todos.find({ completed: true });
        return res.status(200).send(JSON.stringify(todos));

      case "incomplete":
        todos = await Todos.find({ completed: false });
        return res.status(200).send(JSON.stringify(todos));

      default:
        todos = await Todos.find({});
        return res.status(200).send(JSON.stringify(todos));
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const todo = req.body.title;
  try {
    const todoData = await Todos.create({ title: todo });
    return res.status(200).send(JSON.stringify(todoData));
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error: error.message });
  }
});
router.post("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const todoData = await Todos.findOne({ _id: id });
    const todoCompleted = todoData.completed ? false : true;
    const updateTodo = await Todos.updateOne(
      { _id: id },
      {
        $set: {
          completed: todoCompleted,
        },
      }
    );
    return res.status(200).send(JSON.stringify(updateTodo));
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error: error.message });
  }
});
router.delete("/", async (req, res) => {
  const id = req.body.todoId;
  try {
    const todoData = await Todos.deleteOne({ _id: id });
    return res.status(200).send(JSON.stringify(todoData));
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error: error.message });
  }
});

module.exports = router;
