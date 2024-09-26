// IMPORT
const User = require("../model/user");

// display signup form
const displaySignUpForm = (req, res) => {
  res.render("../view/signup");
};

//Get all users
// const getAllUser = (req, res) => {
//   res.send("People list not implemented");
//   // User.getAllUser()
// };

//Get one User
// const getOneUser = (req, res) => {
//   res.send("People detail not implemented.");
// };

// Create new user
const createNewUser = async (req, res) => {
  let new_user_info = req.body;
  console.log("user info", new_user_info);

  // validate new_user_info
  if (
    !new_user_info.first_name ||
    !new_user_info.last_name ||
    !new_user_info.phone_number ||
    !new_user_info.username ||
    !new_user_info.password
  ) {
    return res
      .status(403)
      .json({ code: 1, status: "error", message: "Missing required fields." });
  }

  //add new user to the database
  let user = await User.create(new_user_info);

  if (user) {
    res.status(201).json({
      code: 0,
      status: "success",
      message: "Account created!",
      data: user.dataValues,
    });
  }
};

// Delete user
// const deleteUser = function (req, res) {
//   res.send("NOT IMPLEMENTED: people delete POST");
// };

//Update user
// const updateUser = function (req, res) {
//   res.send("NOT IMPLEMENTED: Book update POST");
// };

module.exports = {
  displaySignUpForm,
  createNewUser,
};
