const express = require("express");
const { checkAuthenticated } = require("../middleware/passport");

const resourcesController = require("../controller/resourcesController");

const router = express.Router();

router.get(
  "/resources",
  checkAuthenticated,
  resourcesController.displayResourcesPage
);

module.exports = router;
