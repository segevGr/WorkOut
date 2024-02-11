const express = require("express");
const MusclesController = require("../controllers/Muscles");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(MusclesController.getAllMuscles)
  .post(authController.protect, MusclesController.createMuscle);

router
  .route("/:id")
  .get(MusclesController.getMuscleById)
  .patch(MusclesController.updateMuscle)
  .delete(MusclesController.deleteMuscle);
router.route("/name/:name").get(MusclesController.getMuscleByName);

module.exports = router;
