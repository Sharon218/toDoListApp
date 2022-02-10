const Task = require("../../models/task");
const getTasks = (req, res) => {
  res.send("get all tasks");
};

const getTask = (req, res) => {
  res.send("Showing single task");
};

const updateTask = (req, res) => {
  res.send("update tasks");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

const addTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
};
module.exports = {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  addTask,
};
