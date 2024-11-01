const express = require("express");
const { checkAuthenticated } = require("../middleware/passport");

const discussionsController = require("../controller/discussionsController");

const router = express.Router();

router.get(
  "/discussions",
  checkAuthenticated,
  discussionsController.displayDiscussionsPage
);

module.exports = router;
