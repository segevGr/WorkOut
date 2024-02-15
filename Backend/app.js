// imports
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/ErrorController");

const MusclesRouter = require("./routes/MusclesRouter");
const ExercisesRouter = require("./routes/ExercisesRouter");
const UsersRouter = require("./routes/UsersRouter");

const app = express();

app.use(helmet());

app.use(morgan("dev"));

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api", limiter);

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

app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());
app.use(xss());
app.use(
  hpp({
    whitelist: [
      "name",
      "email",
      "active",
      "muscleName",
      "exerciseName",
      "muscleGroup",
      "workOn",
      "highlights",
      "muscleGroupName",
    ],
  })
);

// routes
app.use("/api/muscles", MusclesRouter);
app.use("/api/exercises", ExercisesRouter);
app.use("/api/users", UsersRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
