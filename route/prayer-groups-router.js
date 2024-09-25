const express = require("express");
const prayerGroupsController = require("../controller/prayerGroupController");

const router = express.Router();

router.get("/prayer-groups", prayerGroupsController.displayPrayerGroupsPage);
router.get(
  "/prayer-groups/:id",
  prayerGroupsController.displayPrayerGroupsDetails
);
router.get("/add-prayer-group", prayerGroupsController.displayPrayerGroupsForm);
router.post("/add-prayer-group", prayerGroupsController.addPrayerGroup);

module.exports = router;
