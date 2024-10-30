// IMPORT
const User = require("../model/user");

// display signup form
const displaySignUpForm = (req, res) => {
  res.render("../view/signup");
};

//Get all users
const getAllUser = async (req, res) => {
  try {
    let users = await User.findAll({ raw: true });
    console.log("users", users);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

//Get one User
// const getOneUser = (req, res) => {
//   res.send("People detail not implemented.");
// };

// Create new user
const createNewUser = async (req, res) => {
  let admin_verification_pin = "LifeNation@5";
  let new_user_info = req.body;
  console.log("user info", new_user_info);

  // check for correct verification pin from user
  if (
    new_user_info.role === "admin" &&
    new_user_info.pin.trim() !== admin_verification_pin
  ) {
    return res
      .status(403)
      .json({ code: 1, status: "error", message: "Incorrect PIN" });
  }

  // validate new_user_info
  if (
    !new_user_info.first_name ||
    !new_user_info.last_name ||
    !new_user_info.gender ||
    !new_user_info.phone_number ||
    !new_user_info.role ||
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
  getAllUser,
};
