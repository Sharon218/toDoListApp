// Initialising the app
const express = require("express");
const app = express();
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
const routeNotFound = require("./middlewares/not-found");
app.use(routeNotFound);
const errorHandlerMiddleware = require("./middlewares/error-handler");
app.use(errorHandlerMiddleware);

// starting the server
const port = process.env.PORT || 3000;
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
