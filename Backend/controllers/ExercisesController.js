const Exercises = require("../models/ExercisesModel");
const factory = require("./HandlerFactory");

exports.getAllExercises = factory.getAll(Exercises, "exercises");
exports.getExercisesById = factory.getOne(Exercises, "exercise");
exports.createExercises = factory.createOne(Exercises, "exercise");
exports.updateExercise = factory.updateOne(Exercises, "exercise");
exports.deleteExercise = factory.deleteOne(Exercises, "exercise");
