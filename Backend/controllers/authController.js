const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const sendEmail = require("../utils/Email");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(user._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  const user = await Users.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect Email or Password", 401));
  }

  const token = signToken(user._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }
  const token = req.headers.authorization.split(" ")[1];

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const verifyUser = await Users.findById(decoded.id);
  if (!verifyUser) {
    return next(
      new AppError("The user belonging to this token does no longer exist", 401)
    );
  }
  if (verifyUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again", 401)
    );
  }

  req.user = verifyUser;
  next();
});

exports.restrictTo = (...roles) => {
  return catchAsync(async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          "You don't have permission to perform this action on this resource",
          403
        )
      );
    }
    next();
  });
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await Users.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError("There is no user with that email", 404));
  }

  const resetToken = user.createResetToken();

  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/users/resetPassword/${resetToken}`;
  const message = `Please use the following URL to reset your password:${resetURL}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Reset your password",
      message,
    });
    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetExpire = undefined;
    user.passwordResetToken = undefined;
    await user.save({ validateBeforeSave: false });

    console.log(err);
    return next(new AppError("Email could not be sent.", 500));
  }
});

exports.resetPassword = (req, res, next) => {};
