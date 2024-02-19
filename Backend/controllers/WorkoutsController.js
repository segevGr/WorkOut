const Workouts = require("../models/WorkoutsModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./HandlerFactory");

exports.getAllWorkouts = factory.getAll(Workouts, "workouts");
exports.getWorkoutsById = factory.getOne(Workouts, "workout");
exports.createWorkout = factory.createOne(Workouts, "workouts");
