const express = require("express");
const authController = require("../controllers/authController");
const usersController = require("../controllers/UsersController");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

router.route("/forgotPassword").post(authController.forgotPassword);
router.route("/resetPassword/:token").patch(authController.resetPassword);

router
  .route("/updateMyPassword")
  .patch(authController.protect, authController.updatePassword);

router
  .route("/")
  .get(usersController.withoutInactive, usersController.getAllUsers);
router.route("/includeInactive").get(usersController.getAllUsers);

router
  .route("/updateMe")
  .patch(authController.protect, usersController.updateMe);

router
  .route("/deactivateUser/:id")
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    usersController.deactivateUser
  );

module.exports = router;
