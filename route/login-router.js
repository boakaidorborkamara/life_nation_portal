const express = require("express");
const { passport, checkAuthenticated } = require("../middleware/passport");

const loginController = require("../controller/loginController");

const router = express.Router();

router.get("/login", loginController.displayLoginForm);

router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("login successful");
  res.json({ status: "OK", code: 0, message: "Login Successful" });
});

// router.post("/login", function (req, res, next) {
//   passport.authenticate("local", function (err, user, info, status) {
//     console.log("uss", user);
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.redirect("/login");
//     }
//     res.redirect("/prayer-groups");
//   })(req, res, next);
// });

module.exports = router;
