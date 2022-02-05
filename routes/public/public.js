const express = require('express')
const router = express.Router()
const {
  getTasks,
  addTask,
  deleteTask
} = require('../../controllers/public/public.js')

router.route('/').get(getTasks).post(addTask).delete(deleteTask)

module.exports = router
