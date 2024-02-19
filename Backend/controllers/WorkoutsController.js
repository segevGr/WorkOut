const Workouts = require("../models/WorkoutsModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./HandlerFactory");

exports.getAllWorkouts = factory.getAll(Workouts, "workouts");
exports.getWorkoutsById = factory.getOne(Workouts, "workout", {
  path: "exercises.exerciseId",
  select: "exerciseName highlights exerciseVideo",
});
exports.createWorkout = factory.createOne(Workouts, "workout");

// exports.updateExerciseFromWorkout = catchAsync(async (req, res, next) => {
//   const filters = {
//     _id: req.params.workoutId,
//     "exercises._id": req.body.exerciseId,
//   };

//   const { sets, notes } = req.body;
//   const update = {};
//   if (sets !== undefined) {
//     update["$set"] = { "exercises.$.sets": sets };
//   }
//   if (notes !== undefined) {
//     update["$set"]["exercises.$.notes"] = notes;
//   }

//   const workout = await Workouts.findByIdAndUpdate(filters, update, {
//     new: true,
//     runValidators: true,
//   });
//   if (!workout) {
//     return next(
//       new AppError("No workout or exercise found with that IDs", 404)
//     );
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       workout,
//     },
//   });
// });

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
