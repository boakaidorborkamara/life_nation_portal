//Display all prayer schedules
const prayer_schedule_list = (req, res) => {
    res.send("Prayer time list not implemented")
}


//Display detail page for a specific prayer schedule
const prayer_schedule_detail = (req, res) => {
    res.send("Prayer detail not implemented.");
}

// Handle prayer scheule create on POST
const prayer_schedule_create_post = (req, res) => {
    res.send("Not yet implemented Prayer create POST")
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