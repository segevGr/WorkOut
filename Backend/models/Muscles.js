const mongoose = require("mongoose");

const musclesSchema = new mongoose.Schema(
  {
    muscleName: {
      type: String,
      required: [true, "Muscle must to have a muscleName"],
      unique: true,
      trim: true,
    },
    muscleImage: {
      type: String,
      required: [true, "Muscle must to have an image"],
      unique: true,
      trim: true,
    },
  }
  // {
  //   toJSON: { virtuals: true },
  //   toObject: { virtuals: true },
  // }
);

// muscles.virtual("VirtualTest").get(function () {
//   return this.name;
// });

const Muscles = mongoose.model("Muscles", musclesSchema);

module.exports = Muscles;
