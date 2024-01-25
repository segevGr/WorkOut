// imports
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");

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
app.use("/api/users", userRouter);

module.exports = app;
