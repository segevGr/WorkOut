const Exercises = require("../models/ExercisesModel");
const AppError = require("../utils/AppError");
const APIFeatures = require("../utils/APIFeatures");
const catchAsync = require("../utils/catchAsync");
const factory = require("./HandlerFactory");

exports.getAllExercises = catchAsync(async (req, res, next) => {
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

exports.getExercisesById = catchAsync(async (req, res, next) => {
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

exports.createExercises = catchAsync(async (req, res, next) => {
  const addedExercises = await Exercises.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      addedExercises,
    },
  });
});

exports.updateExercise = catchAsync(async (req, res, next) => {
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

exports.deleteExercise = factory.deleteOne(Exercises);
