const express = require("express");
const ExercisesController = require("../controllers/Exercises");

const router = express.Router();

router
  .route("/")
  .get(ExercisesController.getAllExercises)
  .post(ExercisesController.createExercises);

router
  .route("/:id")
  .get(ExercisesController.getExercisesById)
  .patch(ExercisesController.updateExercise)
  .delete(ExercisesController.deleteExercise);

module.exports = router;
