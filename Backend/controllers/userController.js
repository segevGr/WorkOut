const fs = require("fs");
const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "Success",
    results: users.length,
    data: { users },
  });
};

exports.getUserById = (req, res) => {
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
