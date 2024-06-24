const express = require("express");

const prayerGroupsController = require("../controller/prayerGroupsController");

const router = express.Router();

router.get("/prayer-groups", prayerGroupsController.displayPrayerGroupsPage);

module.exports = router;
