const People = require("../model/people");
const PrayerSchedule = require("../model/people");

//Display all churches
const people_list = (req, res) => {
    res.send("People list not implemented")
}

// Display the form 
// display homepage 
const signup = (req, res) => {
    res.render("../view/prayer-signup");
}



//Display detail page for a specific person
const people_detail = (req, res) => {
    res.send("People detail not implemented.");
}

// Handle person create on POST
const people_create_post = (req, res) => {

    let new_signup_details = req.body;
    console.log(new_signup_details["availableTIme"]);

    //get foreign key from prayer schedule table
    // (async() => {
    //     const my_foreign_key = await PrayerSchedule.findOne({ where: { time: new_signup_details["availableTime"] } });
    //     if (my_foreign_key === null) {
    //         console.log('Not found!');
    //     } else {
    //         // console.log(project instanceof Project); // true
    //         console.log(my_foreign_key.id); // 'My Title'
    //     }
    // })();

    //add new member to the database
    (async() => {
        await People.create(new_signup_details);

        console.log("New member added to database");

        res.send({ "status_code": 0, "status_message": "Signup Sucessful" });
    })();


}

// Handle church delete on POST.
const people_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: people delete POST');
};


// Handle book update on POST.
const people_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};



module.exports = {
    signup,
    people_list,
    people_detail,
    people_create_post,
    people_delete_post,
    people_update_post
}