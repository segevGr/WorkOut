const mongoose = require("mongoose");
const MusclesController = require("../controllers/MusclesController");

const exercisesSchema = new mongoose.Schema(
  {
    exerciseName: {
      type: String,
      required: [true, "Exercise must have a name"],
      unique: true,
      trim: true,
    },
    muscleGroup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Muscles",
      required: [true, "Exercise must belong to a muscle group"],
    },
    muscleGroupName: {
      type: String,
    },
    workOn: {
      type: String,
      required: [true, "Exercise must have a workOn field"],
      trim: true,
    },
    highlights: {
      type: String,
      required: [true, "Exercise must have a highlights"],
      trim: true,
    },
    exerciseVideo: {
      type: String,
      required: [true, "Exercise must to have a video"],
      trim: true,
    },
  }
  // {
  //   toJSON: { virtuals: true },
  //   toObject: { virtuals: true },
  // }
);

exercisesSchema.pre("save", async function (next) {
  this.muscleGroupName = await MusclesController.getMuscleNameById(
    this.muscleGroup
  );
  next();
});

const Exercises = mongoose.model("Exercises", exercisesSchema);

module.exports = Exercises;
