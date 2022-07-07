const express = require('express');
const thankYouPageController = require('../controller/thankYouController');



const router = express.Router();


router.get('/thanks', thankYouPageController);


module.exports = router;