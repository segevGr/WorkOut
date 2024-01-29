const express = require("express");
const MusclesController = require("../controllers/Muscles");

const router = express.Router();

router
  .route("/")
  .get(MusclesController.getAllMuscles)
  .post(MusclesController.createMuscle);
// router.route("/:id").get(MusclesController.getUserById);

module.exports = router;
