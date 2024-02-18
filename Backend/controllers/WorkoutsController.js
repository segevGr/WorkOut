const Workouts = require("../models/WorkoutsModel");
const AppError = require("../utils/AppError");
const APIFeatures = require("../utils/APIFeatures");
const catchAsync = require("../utils/catchAsync");
const factory = require("./HandlerFactory");

exports.getAllWorkouts = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Workouts.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const muscles = await features.query;

  res.status(200).json({
    status: "success",
    results: muscles.length,
    data: { muscles },
  });
});

exports.getMuscleById = catchAsync(async (req, res, next) => {
  const muscle = await Workouts.findById(req.params.id);
  if (!muscle) {
    return next(new AppError("No muscle found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    results: muscle.length,
    data: { muscle },
  });
});

exports.getMuscleNameById = async (muscleID) => {
  const muscle = await Workouts.findById(muscleID);
  const result = muscle ? muscle.muscleName : "Muscle not found";
  return result;
};

exports.getMuscleByName = catchAsync(async (req, res, next) => {
  const muscle = await Workouts.findOne({ muscleName: req.params.name });
  if (!muscle) {
    return next(new AppError("No muscle found with that ID", 404));
  }
  res.status(200).json({
    status: "Success",
    results: 1,
    data: { muscle },
  });
});

exports.createWorkout = catchAsync(async (req, res, next) => {
  const addedMuscle = await Workouts.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      addedMuscle,
    },
  });
});

exports.updateMuscle = catchAsync(async (req, res, next) => {
  const muscle = await Workouts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!muscle) {
    return next(new AppError("No muscle found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      muscle,
    },
  });
});

exports.deleteMuscle = factory.deleteOne(Workouts);
