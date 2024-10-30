const express = require("express");
const { passport, checkAuthenticated } = require("../middleware/passport");

const loginController = require("../controller/loginController");

const router = express.Router();

router.get("/login", loginController.displayLoginForm);

router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("working", req.body);
  res.json({ status: "OK", code: 0, message: "Login Successful" });
});

module.exports = router;
