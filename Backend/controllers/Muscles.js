const Muscles = require("../models/Muscles");

exports.getAllMuscles = async (req, res) => {
  try {
    const muscles = await Muscles.find();
    res.status(200).json({
      status: "success",
      results: muscles.length,
      data: { muscles },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getMuscleById = async (req, res) => {
  try {
    const muscle = await Muscles.findById(req.params.id);
    if (!muscle) {
      return res.status(404).json({
        status: "fail",
        message: "Muscle not found",
      });
    }
    res.status(200).json({
      status: "success",
      results: muscle.length,
      data: { muscle },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getMuscleByName = async (req, res) => {
  try {
    const muscle = await Muscles.findOne({ muscleName: req.params.name });
    if (!muscle) {
      return res.status(404).json({
        status: "fail",
        message: "Muscle not found",
      });
    }

    res.status(200).json({
      status: "Success",
      results: 1,
      data: { muscle },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
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

exports.updateMuscle = async (req, res) => {
  try {
    const muscle = await Muscles.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!muscle) {
      return res.status(404).json({
        status: "fail",
        message: "Muscle not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        muscle,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteMuscle = async (req, res) => {
  try {
    await Muscles.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "Muscle not found",
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
