// importing model
const Task = require("../../models/task");
// Using a custom made middleware
const asyncWrapper = require("../../middlewares/async");

const { createCustomError } = require("../../errors/custom-error");

// Fetching all tasks from the database
const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// Fetching one task from the database with it's id
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with id ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

// Updating a task details
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

// Delete a taks
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with id ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

// Adding a task to the database
const addTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

module.exports = {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  addTask,
};
