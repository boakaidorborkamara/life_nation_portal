//Display all churches
const people_list = (req, res) => {
    res.send("People list not implemented")
}

// Display the form 
// display homepage 
const signup = (req, res) => {
    res.render("../view/prayer-signup");
}



//Display detail page for a specific book
const people_detail = (req, res) => {
    res.send("People detail not implemented.");
}

// Handle church create on POST
const people_create_post = (req, res) => {
    res.send("Not yet implemented People create POST")
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