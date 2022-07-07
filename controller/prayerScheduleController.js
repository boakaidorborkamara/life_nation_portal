const PrayerSchedule = require("../model/prayer_schedule");

//Display all prayer schedules
const prayer_schedule_list = (req, res) => {
    let prayer_dates = "";
    (async() => {
        prayer_dates = await PrayerSchedule.findAll();
        res.send({ "status_code": 0, "status_message": "all prayer dates", prayer_dates });
    })();

    // console.log(prayers);
    // res.send(prayers)
}


//Display detail page for a specific prayer schedule
const prayer_schedule_detail = (req, res) => {

    res.send("Prayer detail not implemented.");
}


// Handle prayer scheule create on POST
const prayer_schedule_create_post = (req, res) => {

    console.log(req.body);
    let new_schedule = {
        // morning 
        time: " 5:00am - 6:00am",
        whatsAppLink: "https://chat.whatsapp.com/HYU10WYtnXTFDYzWx1pwt2",
        sectionOfDay: "Morning",

        time: " 6:00am - 7:00am",
        whatsAppLink: "https://chat.whatsapp.com/CJJ8e6xOWRqIilc9U1uRBZ",
        sectionOfDay: "Morning",

        // noon 
        time: " 12:00pm - 1:00pm",
        whatsAppLink: "https://chat.whatsapp.com/Gmemhznhhj0F64ZqGuZcfZ",
        sectionOfDay: "Noon",

        // night
        time: " 8:00pm - 9:00pm",
        whatsAppLink: "https://chat.whatsapp.com/IGczeFuXHmTHRAICYAwy8C",
        sectionOfDay: "Night",

        time: " 9:00pm - 10:00pm",
        whatsAppLink: "https://chat.whatsapp.com/B5xqPprSCf18CCzFohRtsd",
        sectionOfDay: "Night",

        time: " 10:00pm - 11:00pm",
        whatsAppLink: "https://chat.whatsapp.com/GXjZFeGS88IBEOAzLoP9zA",
        sectionOfDay: "Night",

        time: " 11:00pm - 12:00am",
        whatsAppLink: "https://chat.whatsapp.com/JsPkyHaq51a4cPSQLM4Eqm",
        sectionOfDay: "Night",

        time: " 12:00am - 1:00am",
        whatsAppLink: "https://chat.whatsapp.com/BEVpL9DyBoiA8SS5K7lmcI",
        sectionOfDay: "Night"
    };
    // // add new member to the database
    (async() => {
        await PrayerSchedule.create({
            time: " 12:00am - 1:00am",
            whatsAppLink: "https://chat.whatsapp.com/BEVpL9DyBoiA8SS5K7lmcI",
            sectionOfDay: "Night"
        });

        console.log("New schedule added to database");

        res.send({ "status_code": 0, "status_message": "schedule is added sucessful" });
    })();
    // res.send("Not yet implemented Prayer create POST")
}

// Handle prayer schedule delete on POST.
const prayer_schedule_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Prayer delete POST');
};


// Handle prayer update on POST.
const prayer_schedule_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Prayer Schedule update POST');
};



module.exports = {
    prayer_schedule_list,
    prayer_schedule_detail,
    prayer_schedule_create_post,
    prayer_schedule_delete_post,
    prayer_schedule_update_post
}