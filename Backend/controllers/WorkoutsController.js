const Workouts = require("../models/WorkoutsModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./HandlerFactory");

exports.getAllWorkouts = factory.getAll(Workouts, "workouts");
exports.getWorkoutsById = factory.getOne(Workouts, "workout", {
  path: "exercises.exerciseId",
  select: "exerciseName highlights exerciseVideo",
});
exports.deleteWorkout = factory.deleteOne(Workouts, "workout");
exports.createWorkout = factory.createOne(Workouts, "workout");

exports.updateExerciseFromWorkout = catchAsync(async (req, res, next) => {
  const workoutId = req.params.workoutId;
  const exerciseId = req.params.exerciseId;

  const filters = {
    _id: workoutId,
    "exercises._id": exerciseId,
  };

  const update = {};
  if (req.body.sets || req.body.notes) {
    update["$set"] = {};
  }
  if (req.body.sets) {
    update["$set"]["exercises.$[exercise].sets"] = req.body.sets;
  }
  if (req.body.notes) {
    update["$set"]["exercises.$[exercise].notes"] = req.body.notes;
  }

  const options = {
    new: true,
    runValidators: true,
    arrayFilters: [{ "exercise._id": exerciseId }],
  };

  const workout = await Workouts.findOneAndUpdate(filters, update, options);

  if (!workout) {
    return next(
      new AppError("No workout or exercise found with those IDs", 404)
    );
  }

  res.status(200).json({
    status: "success",
    data: {
      workout,
    },
  });
});

exports.addExerciseToWorkout = catchAsync(async (req, res, next) => {
  const filter = { _id: req.params.workoutId };
  const update = {
    $push: { exercises: { exerciseId: req.params.exerciseId } },
  };
  const options = {
    new: true,
    runValidators: true,
  };

  const workout = await Workouts.findOneAndUpdate(
    filter,
    update,
    options
  ).populate({
    path: "exercises.exerciseId",
    select: "exerciseName highlights exerciseVideo",
  });

  if (!workout) {
    return next(
      new AppError("No workout or exercise found with those IDs", 404)
    );
  }

  res.status(200).json({
    status: "success",
    data: {
      workout,
    },
  });
});

exports.deleteExerciseFromWorkout = catchAsync(async (req, res, next) => {
  const filter = { _id: req.params.workoutId };
  const update = {
    $pull: { exercises: { exerciseId: req.params.exerciseId } },
  };
  const options = {
    new: true,
    runValidators: true,
  };

  const workout = await Workouts.findOneAndUpdate(
    filter,
    update,
    options
  ).populate({
    path: "exercises.exerciseId",
    select: "exerciseName highlights exerciseVideo",
  });

  if (!workout) {
    return next(
      new AppError("No workout or exercise found with those IDs", 404)
    );
  }

  res.status(200).json({
    status: "success",
    data: {
      workout,
    },
  });
});
