const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../../controllers/public/public.js");

router.route("/").get(getTasks).post(addTask);
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;
