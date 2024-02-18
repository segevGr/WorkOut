const express = require("express");
const ExercisesController = require("../controllers/ExercisesController");
const AuthController = require("../controllers/AuthController");

const router = express.Router();
router.use(AuthController.protect);

router
  .route("/")
  .get(ExercisesController.getAllExercises)
  .post(
    AuthController.restrictTo("admin"),
    ExercisesController.createExercises
  );

router
  .route("/:id")
  .get(ExercisesController.getExercisesById)
  .patch(AuthController.restrictTo("admin"), ExercisesController.updateExercise)
  .delete(
    AuthController.restrictTo("admin"),
    ExercisesController.deleteExercise
  );

module.exports = router;
