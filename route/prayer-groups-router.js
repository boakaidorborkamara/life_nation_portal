const express = require("express");
const { passport, checkAuthenticated } = require("../middleware/passport");
const prayerGroupsController = require("../controller/prayerGroupController");

const router = express.Router();

router.get(
  "/prayer-groups",
  checkAuthenticated,
  prayerGroupsController.displayPrayerGroupsPage
);
router.get(
  "/prayer-groups/:id",
  prayerGroupsController.displayPrayerGroupsDetails
);
router.get("/add-prayer-group", prayerGroupsController.displayPrayerGroupsForm);
router.post("/add-prayer-group", prayerGroupsController.addPrayerGroup);
router.post("/prayer-groups/:id/join", prayerGroupsController.joinPrayerGroup);

module.exports = router;
