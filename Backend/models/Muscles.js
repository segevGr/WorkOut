const mongoose = require("mongoose");

const muscles = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Muscle must to have a name"],
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Muscle must to have an image"],
      unique: true,
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

muscles.virtual("VirtualTest").get(function () {
  return this.name;
});

const Muscles = mongoose.model("Muscles", muscles);

module.exports = Muscles;
