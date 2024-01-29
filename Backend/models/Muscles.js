const mongoose = require("mongoose");

const muscles = new mongoose.Schema({
  muscleName: {
    type: String,
    required: [true, "Muscle name must have a name"],
    unique: true,
  },
});

const Muscles = mongoose.model("Muscles", muscles);

module.exports = Muscles;
