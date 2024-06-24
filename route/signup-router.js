const express = require("express");

const signupController = require("../controller/signupController");

const router = express.Router();

router.get("/", homepageController);

module.exports = router;
