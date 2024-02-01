const Exercises = require("../models/Exercises");
const APIFeatures = require("../utils/APIFeatures");

exports.getAllExercises = async (req, res) => {
  try {
    const features = new APIFeatures(Exercises.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const exercises = await features.query;

    res.status(200).json({
      status: "success",
      results: exercises.length,
      data: { exercises },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getExercisesById = async (req, res) => {
  try {
    const exercise = await Exercises.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({
        status: "fail",
        message: "Exercise not found",
      });
    }

    res.status(200).json({
      status: "Success",
      results: 1,
      data: { exercise },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createExercises = async (req, res) => {
  try {
    console.log(req.body);
    const addedExercises = await Exercises.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        addedExercises,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateExercise = async (req, res) => {
  try {
    const exercise = await Exercises.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!exercise) {
      return res.status(404).json({
        status: "fail",
        message: "exercise not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        exercise,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteExercise = async (req, res) => {
  try {
    const result = await Exercises.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "exercise not found",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};
