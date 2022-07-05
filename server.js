const express = require('express');
const ejs = require('ejs');

const path = require('path');


// create an express app 
const app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');


// enable usage of static file 
const PORT = process.env.port || 3000;
app.use(express.static('public'));


// connect to database and create tables from models
const db = require('./db-config/database');
const people_table = require('./model/people');
const prayer_schedule_table = require('./model/prayer_schedule');


//ROUTES
const homepage_router = require('./route/homepage_router')
const people_router = require('./route/people_router');
const prayer_schedule_router = require('./route/prayer_schedule_router');

app.use(homepage_router);
app.use(people_router);
app.use(prayer_schedule_router);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})