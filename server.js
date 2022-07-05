const express = require('express');
const { dirname } = require('path');
const path = require('path');


// create an express app 
const app = express();


// enable usage of static file 
const PORT = process.env.port || 3000;
app.use(express.static('public'));

// connect to database 
const db = require('./db-config/database');
// tables 
const people_table = require('./model/people');
const prayer_schedule_table = require('./model/prayer_schedule');


//ROUTES
const people_router = require('./route/people_router');
const prayer_schedule_router = require('./route/prayer_schedule_router');

app.use(people_router);
app.use(prayer_schedule_router);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})