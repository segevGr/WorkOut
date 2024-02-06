const Exercises = require("../models/Exercises");
const APIFeatures = require("../utils/APIFeatures");
const catchAsync = require("../utils/catchAsync");

exports.getAllExercises = catchAsync(async (req, res) => {
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
});

exports.getExercisesById = catchAsync(async (req, res) => {
  const exercise = await Exercises.findById(req.params.id);
  if (!exercise) {
    return next(new AppError("No muscle found with that ID", 404));
  }
  res.status(200).json({
    status: "Success",
    results: 1,
    data: { exercise },
  });
});

exports.createExercises = catchAsync(async (req, res) => {
  console.log(req.body);
  const addedExercises = await Exercises.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      addedExercises,
    },
  });
});

exports.updateExercise = catchAsync(async (req, res) => {
  const exercise = await Exercises.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!exercise) {
    return next(new AppError("No muscle found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      exercise,
    },
  });
});

exports.deleteExercise = catchAsync(async (req, res) => {
  const exercise = await Exercises.findByIdAndDelete(req.params.id);
  if (!exercise) {
    return next(new AppError("No muscle found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
