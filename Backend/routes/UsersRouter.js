const express = require("express");
const usersController = require("../controllers/UsersController");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.route("/signup").post(AuthController.signup);
router.route("/login").post(AuthController.login);

router.route("/forgotPassword").post(AuthController.forgotPassword);
router.route("/resetPassword/:token").patch(AuthController.resetPassword);

router
  .route("/updateMyPassword")
  .patch(AuthController.protect, AuthController.updatePassword);

router
  .route("/")
  .get(
    AuthController.protect,
    AuthController.restrictTo("admin"),
    usersController.withoutInactive,
    usersController.getAllUsers
  );
router
  .route("/includeInactive")
  .get(
    AuthController.protect,
    AuthController.restrictTo("admin"),
    usersController.getAllUsers
  );

router
  .route("/updateMe")
  .patch(AuthController.protect, usersController.updateMe);

router
  .route("/deactivateUser/:id")
  .delete(
    AuthController.protect,
    AuthController.restrictTo("admin"),
    usersController.deactivateUser
  );

module.exports = router;
