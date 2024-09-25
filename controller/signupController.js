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
// const createNewUser = (req, res) => {
//   let new_user_info = req.body;

//   (async () => {
//     //add new member to the database
//     await People.create(new_signup_details);
//     console.log("New member added to database");
//   })();
// };

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
};
