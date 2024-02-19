const express = require("express");
const WorkoutsController = require("../controllers/WorkoutsController");
const AuthController = require("../controllers/AuthController");

const router = express.Router({ mergeParams: true });
router.use(AuthController.protect);

router
  .route("/")
  .get(WorkoutsController.getAllWorkouts)
  .post(WorkoutsController.createWorkout);

router.route("/:id").get(WorkoutsController.getWorkoutsById);

router
  .route("/:workoutId/exercise/:exerciseId")
  .patch(WorkoutsController.updateExerciseFromWorkout);
module.exports = router;
