const express = require('express');
const homepage = require('../controller/homepageController');
const homepageController = require('../controller/homepageController');


const router = express.Router();


router.get('/', homepageController);


module.exports = router;