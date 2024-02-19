const Workouts = require("../models/WorkoutsModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./HandlerFactory");

exports.getAllWorkouts = factory.getAll(Workouts, "workouts");
exports.getMuscleById = factory.getOne(Workouts, "workouts");
exports.createWorkout = factory.createOne(Workouts, "workouts");
exports.updateMuscle = factory.updateOne(Workouts, "workouts");
exports.deleteMuscle = factory.deleteOne(Workouts, "workouts");
