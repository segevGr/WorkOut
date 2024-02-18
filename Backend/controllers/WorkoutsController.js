const Workouts = require("../models/WorkoutsModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./HandlerFactory");

exports.getMuscleNameById = catchAsync(async (muscleID) => {
  const muscle = await Workouts.findById(muscleID);
  const result = muscle ? muscle.muscleName : "Muscle not found";
  return result;
});

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

exports.getAllWorkouts = factory.getAll(Workouts, "workouts");
exports.getMuscleById = factory.getOne(Workouts, "workouts");
exports.createWorkout = factory.createOne(Workouts, "workouts");
exports.updateMuscle = factory.updateOne(Workouts, "workouts");
exports.deleteMuscle = factory.deleteOne(Workouts, "workouts");
