const Users = require("../models/UsersModel");
const AppError = require("../utils/AppError");
const APIFeatures = require("../utils/APIFeatures");
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

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Users.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const users = await features.query;

  res.status(200).json({
    status: "success",
    results: users.length,
    data: { users },
  });
});

exports.getUserById = catchAsync(async (muscleID) => {
  const muscle = await Users.findById(muscleID).populate("workouts");
  const result = muscle ? muscle.muscleName : "Muscle not found";
  return result;
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
  const user = await Users.findByIdAndUpdate(
    req.params.id,
    { active: false },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.deleteUser = factory.deleteOne(Users);
