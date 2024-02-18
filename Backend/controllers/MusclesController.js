const Muscles = require("../models/MusclesModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./HandlerFactory");

exports.getMuscleNameById = catchAsync(async (muscleID) => {
  const muscle = await Muscles.findById(muscleID);
  const result = muscle ? muscle.muscleName : "Muscle not found";
  return result;
});

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

exports.getAllMuscles = factory.getAll(Muscles, "muscles");
exports.getMuscleById = factory.getOne(Muscles, "muscles");
exports.createMuscle = factory.createOne(Muscles, "muscles");
exports.updateMuscle = factory.updateOne(Muscles, "muscles");
exports.deleteMuscle = factory.deleteOne(Muscles, "muscles");
