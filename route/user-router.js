const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

//display homepage
// router.get("/prayer-signup", peopleController.signup);

//get all user
router.get("/users", userController.getAllUser);

//create new user
router.post("/users", userController.createNewUser);

//display details for a specific route
// router.get("/people/:id", peopleController.people_detail);

module.exports = router;
