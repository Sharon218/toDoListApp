const express = require('express')
const router = express.Router()
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask
} = require('../../controllers/public/public.js')

router.route('/').get(getTasks).post(addTask).delete(deleteTask).patch(updateTask)

module.exports = router
