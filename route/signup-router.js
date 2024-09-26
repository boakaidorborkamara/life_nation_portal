const express = require("express");

const signupController = require("../controller/signupController");

const router = express.Router();

router.get("/signup", signupController.displaySignUpForm);
router.post("/signup", signupController.createNewUser);

module.exports = router;
