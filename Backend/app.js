// imports
const express = require("express");
const morgan = require("morgan");

const MusclesRouter = require("./routes/Muscles");
const ExercisesRouter = require("./routes/Exercises");

const app = express();

// middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));

  app.use((req, res, next) => {
    console.log(new Date().toISOString());
    next();
  });
}
app.use(express.json());

// routes
app.use("/api/muscles", MusclesRouter);
app.use("/api/exercises", ExercisesRouter);

module.exports = app;
