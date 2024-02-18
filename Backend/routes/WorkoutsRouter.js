const express = require("express");
const WorkoutsController = require("../controllers/WorkoutsController");
const AuthController = require("../controllers/AuthController");

const router = express.Router({ mergeParams: true });
router.use(AuthController.protect);

router
  .route("/")
  .get(WorkoutsController.getAllWorkouts)
  .post(WorkoutsController.createWorkout);

router.route("/:id");
//   .get(WorkoutsController.getWorkoutsById)
//   .patch(
//     AuthController.protect,
//     AuthController.restrictTo("admin"),
//     WorkoutsController.updateWorkouts
//   )
//   .delete(
//     AuthController.protect,
//     AuthController.restrictTo("admin"),
//     WorkoutsController.deleteWorkouts
//   );

module.exports = router;
