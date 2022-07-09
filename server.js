const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');


// create an express app 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// set the view engine to ejs
app.set('view engine', 'ejs');


// enable usage of static file 
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));


// app.use(express.urlencoded({ extended: true }));


// connect to database and create tables from models
const db = require('./db-config/database');
const people_table = require('./model/people');
const prayer_schedule_table = require('./model/prayer_schedule');



//ROUTES
const homepage_router = require('./route/homepage_router');
const thank_you_page = require('./route/thanks_router')
const people_router = require('./route/people_router');
const prayer_schedule_router = require('./route/prayer_schedule_router');
const { urlencoded } = require('body-parser');

app.use(homepage_router);
app.use(thank_you_page);
app.use(people_router);
app.use(prayer_schedule_router);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})