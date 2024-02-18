const Exercises = require("../models/ExercisesModel");
const factory = require("./HandlerFactory");

exports.getAllExercises = factory.getAll(Exercises, "exercises");
exports.getExercisesById = factory.getOne(Exercises, "exercises");
exports.createExercises = factory.createOne(Exercises, "exercises");
exports.updateExercise = factory.updateOne(Exercises, "exercises");
exports.deleteExercise = factory.deleteOne(Exercises, "exercises");
