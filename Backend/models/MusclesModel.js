const mongoose = require("mongoose");

const musclesSchema = new mongoose.Schema({
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
});

const Muscles = mongoose.model("Muscles", musclesSchema);

module.exports = Muscles;
