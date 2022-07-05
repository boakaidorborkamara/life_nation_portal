const express = require('express');
const prayerScheduleController = require('../controller/prayerScheduleController');


const router = express.Router();



//get all churches
router.get('/prayer_schedule', prayerScheduleController.prayer_schedule_list);

//create a new book POST
router.post('/prayer_schedule/create', prayerScheduleController.prayer_schedule_create_post);

//display details for a specific route
router.get('/prayer_schedule/:id', prayerScheduleController.prayer_schedule_detail)




module.exports = router;