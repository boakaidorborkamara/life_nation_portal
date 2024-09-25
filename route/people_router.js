const express = require("express");
const peopleController = require("../controller/peopleController");

const router = express.Router();

//display homepage
router.get("/prayer-signup", peopleController.signup);

//get all churches
router.get("/people", peopleController.people_list);

//create a new book POST
router.post("/people/create", peopleController.people_create_post);

//display details for a specific route
router.get("/people/:id", peopleController.people_detail);

module.exports = router;
