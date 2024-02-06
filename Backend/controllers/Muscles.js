const Muscles = require("../models/Muscles");
const AppError = require("../utils/AppError");
const APIFeatures = require("../utils/APIFeatures");
const catchAsync = require("../utils/catchAsync");

exports.getAllMuscles = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Muscles.find(), req.query)
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
  const muscle = await Muscles.findById(req.params.id);
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
  const muscle = await Muscles.findById(muscleID);
  const result = muscle ? muscle.muscleName : "Muscle not found";
  return result;
};

exports.getMuscleByName = catchAsync(async (req, res, next) => {
  const muscle = await Muscles.findOne({ muscleName: req.params.name });
  if (!muscle) {
    return next(new AppError("No muscle found with that ID", 404));
  }
  res.status(200).json({
    status: "Success",
    results: 1,
    data: { muscle },
  });
});

exports.createMuscle = catchAsync(async (req, res, next) => {
  const addedMuscle = await Muscles.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      addedMuscle,
    },
  });
});

exports.updateMuscle = catchAsync(async (req, res, next) => {
  const muscle = await Muscles.findByIdAndUpdate(req.params.id, req.body, {
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

exports.deleteMuscle = catchAsync(async (req, res, next) => {
  const muscle = await Muscles.findByIdAndDelete(req.params.id);
  if (!muscle) {
    return next(new AppError("No muscle found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
