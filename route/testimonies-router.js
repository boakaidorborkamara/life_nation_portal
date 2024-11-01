const express = require("express");
const { checkAuthenticated } = require("../middleware/passport");

const testimoniesController = require("../controller/testimoniesController");

const router = express.Router();

router.get(
  "/testimonies",
  checkAuthenticated,
  testimoniesController.displayTestimoniesPage
);

module.exports = router;
