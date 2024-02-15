const express = require("express");
const MusclesController = require("../controllers/MusclesController");
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
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    MusclesController.deleteMuscle
  );
router.route("/name/:name").get(MusclesController.getMuscleByName);

module.exports = router;
