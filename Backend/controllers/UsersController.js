const Users = require("../models/UsersModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./HandlerFactory");

const filterObj = (obj, ...allowedFields) => {
  const returnedObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      returnedObj[el] = obj[el];
    }
  });
  return returnedObj;
};

exports.withoutInactive = catchAsync(async (req, res, next) => {
  req.query = { ...{ active: true } };
  next();
});

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("This route is not for password update", 400));
  }

  const filteredBody = filterObj(req.body, "name", "email");
  const user = await Users.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    user,
  });
});

exports.deactivateUser = catchAsync(async (req, res, next) => {
  const user = await Users.findByIdAndUpdate(req.params.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getAllUsers = factory.getAll(Users, "users");
exports.getUserById = factory.getOne(Users, "users", { path: "workouts" });
exports.deleteUser = factory.deleteOne(Users, "users");
