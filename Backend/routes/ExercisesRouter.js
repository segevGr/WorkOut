const express = require("express");
const ExercisesController = require("../controllers/ExercisesController");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router
  .route("/")
  .get(ExercisesController.getAllExercises)
  .post(
    AuthController.protect,
    AuthController.restrictTo("admin"),
    ExercisesController.createExercises
  );

router
  .route("/:id")
  .get(ExercisesController.getExercisesById)
  .patch(
    AuthController.protect,
    AuthController.restrictTo("admin"),
    ExercisesController.updateExercise
  )
  .delete(
    AuthController.protect,
    AuthController.restrictTo("admin"),
    ExercisesController.deleteExercise
  );

module.exports = router;
