// Initialising the app
const express = require('express')
const app = express()
port = 8080

// Middlewares
const morgan = require('morgan')
app.use(express.static('./public'))
app.use(express.urlencoded({ extended : false }))
app.use(morgan('dev'))

// Routes
const public = require('./routes/public/public.js')
app.use('/', public)

// Server
app.listen(port, () => {
  console.log("Server is running on port ${port}")
})
