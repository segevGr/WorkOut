const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log(new Date().toISOString());
  next();
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`));

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "Success",
    results: users.length,
    data: { users },
  });
};

const getUserById = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((item) => item.id === id);
  !user
    ? res.status(404).json({
        status: "Fail",
        message: "User not found!",
      })
    : res.status(200).json({
        status: "Success",
        data: { user },
      });
};
app.route("/api/users").get(getAllUsers);

app.route("/api/users/:id").get(getUserById);
