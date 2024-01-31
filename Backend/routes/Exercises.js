const express = require("express");
const ExercisesController = require("../controllers/Exercises");

const router = express.Router();

// router
//   .route("/")
//   .get(MusclesController.getAllMuscles)
//   .post(MusclesController.createMuscle);

// router
//   .route("/:id")
//   .get(MusclesController.getMuscleById)
//   .patch(MusclesController.updateMuscle)
//   .delete(MusclesController.deleteMuscle);
// router.route("/name/:name").get(MusclesController.getMuscleByName);

module.exports = router;
