const express = require("express");
const usersController = require("../controllers/UsersController");
const AuthController = require("../controllers/AuthController");
const WorkoutsRouter = require("../routes/WorkoutsRouter");

const router = express.Router();

router.use("/:userId/workouts", WorkoutsRouter);

router.route("/signup").post(AuthController.signup);
router.route("/login").post(AuthController.login);

router.route("/forgotPassword").post(AuthController.forgotPassword);
router.route("/resetPassword/:token").patch(AuthController.resetPassword);

router.use(AuthController.protect);

router.route("/updateMyPassword").patch(AuthController.updatePassword);
router.route("/me").get(usersController.getMe, usersController.getUserById);
router.route("/updateMe").patch(usersController.updateMe);

router.use(AuthController.restrictTo("admin"));

router
  .route("/")
  .get(usersController.withoutInactive, usersController.getAllUsers);

router.route("/includeInactive").get(usersController.getAllUsers);

router
  .route("/:id")
  .get(usersController.getUserById)
  .delete(usersController.deleteUser);

router.route("/deactivateUser/:id").delete(usersController.deactivateUser);

module.exports = router;
