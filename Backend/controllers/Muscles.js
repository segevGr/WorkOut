const Muscles = require("../models/Muscles");

// exports.getUserById = (req, res) => {
//   const id = req.params.id * 1;
//   const user = users.find((item) => item.id === id);
//   !user
//     ? res.status(404).json({
//         status: "Fail",
//         message: "User not found!",
//       })
//     : res.status(200).json({
//         status: "Success",
//         data: { user },
//       });
// };

exports.getAllMuscles = async (req, res) => {
  try {
    const muscles = await Muscles.find();
    res.status(200).json({
      status: "Success",
      results: muscles.length,
      data: { muscles },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createMuscle = async (req, res) => {
  try {
    const addedMuscle = await Muscles.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        addedMuscle,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
