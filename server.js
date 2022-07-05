const express = require('express');

// connect to database 
// const db = require('./db-config/database');


// create an express app 
const app = express();


// enable usage of static file 
const PORT = process.env.port || 3000;
app.use(express.static('public'));


//ROUTES
const people_router = require('./route/people_router');
const prayer_schedule_router = require('./route/prayer_schedule_router');

app.use(people_router);
app.use(prayer_schedule_router);


// ROUTES 
app.get("/", (req, res) => {
    // res.send("Home Page");
    res.render('./view/index');
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})