/* internal import */
const userService = require("../services/user.service");

/* display all users */
exports.displayAllUsers = async (req, res, next) => {
  try {
    const result = await userService.displayAllUsers();

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "User successfully fetched from DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* sign up an user */
exports.signUpNewUser = async (req, res, next) => {
  try {
    const result = await userService.signUpNewUser(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "User signed up successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* sign in an user */
exports.signInExistingUser = async (req, res, next) => {
  try {
    const result = await userService.signInExistingUser(req.body);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "User signed in successfully",
      redirect: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* retain a user after login based token expiry */
exports.getMe = async (req, res, next) => {
  try {
    const { email } = req.user;
    const result = await userService.getMe(email);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "User persist successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific user */
exports.updateSpecificUser = async (req, res, next) => {
  try {
    const result = await userService.updateSpecificUser(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully updated user info",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific user */
exports.removeSpecificUser = async (req, res, next) => {
  try {
    const result = await userService.removeSpecificUser(req.params.id);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully remove specified user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
