const getTasks = (req, res) =>{
  res.send("get all tasks")
}

const updateTask = (req, res) => {
  res.send("update tasks")
}

const deleteTask = (req, res) => {
  res.send("Delete Task")
}

const addTask = (req, res) => {
  res.send("Adding tasks")
}
module.exports = {
  getTasks,
  updateTask,
  deleteTask,
  addTask
}
