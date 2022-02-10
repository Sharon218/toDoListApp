// Initialising the app
const express = require("express");
const app = express();
const port = 8080;
const connectDB = require("./db/connect");
require("dotenv").config();

// Middlewares
const morgan = require("morgan");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
const public = require("./routes/public/public.js");
app.use("/api/v1/tasks", public);

// starting the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
