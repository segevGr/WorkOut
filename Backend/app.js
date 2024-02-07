// imports
const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/Error");

const MusclesRouter = require("./routes/Muscles");
const ExercisesRouter = require("./routes/Exercises");
const UsersRouter = require("./routes/Users");

const app = express();

// middlewares
app.use(morgan("dev"));

// log middleware
app.use((req, res, next) => {
  const israelTimeZone = "Asia/Jerusalem";
  const formattedDate = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: israelTimeZone,
    hour12: false,
  });

  console.log(`${formattedDate.replace(",", "")}, `);
  next();
});
app.use(express.json());

// routes
app.use("/api/muscles", MusclesRouter);
app.use("/api/exercises", ExercisesRouter);
app.use("/api/users", UsersRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
