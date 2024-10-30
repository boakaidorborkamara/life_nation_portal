const express = require("express");
const homepage = require("../controller/homepageController");
const homepageController = require("../controller/homepageController");

const { checkAuthenticated } = require("../middleware/passport");
const router = express.Router();

router.get("/", checkAuthenticated, homepageController);

module.exports = router;
