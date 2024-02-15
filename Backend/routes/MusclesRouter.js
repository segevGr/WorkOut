const express = require("express");
const MusclesController = require("../controllers/MusclesController");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router
  .route("/")
  .get(MusclesController.getAllMuscles)
  .post(
    AuthController.protect,
    AuthController.restrictTo("admin"),
    MusclesController.createMuscle
  );

router
  .route("/:id")
  .get(MusclesController.getMuscleById)
  .patch(
    AuthController.protect,
    AuthController.restrictTo("admin"),
    MusclesController.updateMuscle
  )
  .delete(
    AuthController.protect,
    AuthController.restrictTo("admin"),
    MusclesController.deleteMuscle
  );

router.route("/name/:name").get(MusclesController.getMuscleByName);

module.exports = router;
