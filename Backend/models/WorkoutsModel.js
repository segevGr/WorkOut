const mongoose = require("mongoose");

const workoutsSchema = new mongoose.Schema({
  workoutName: {
    type: String,
    required: [true, "Workout must to have a workoutName"],
    trim: true,
  },
  workoutImage: {
    type: String,
    required: [true, "Workout must to have an image"],
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "Workout must belong to a user"],
  },
  exercises: [
    {
      exerciseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercises",
        required: [true, "Exercise must belong to a Workout"],
      },
      sets: String,
      notes: String,
      exercisesVideo: String,
    },
  ],
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
