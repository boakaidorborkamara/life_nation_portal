const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("path");

const LocalStrategy = require("passport-local");

// create an express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");

// enable usage of static file
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));

// connect to database and create tables from models
const db = require("./db-config/database");

//ROUTES
const homepage_router = require("./route/homepage_router");
const prayer_groups_router = require("./route/prayer-groups-router");
const signup_router = require("./route/signup-router");
const login_router = require("./route/login-router");

app.use(homepage_router);
app.use(prayer_groups_router);
app.use(signup_router);
app.use(login_router);

// app.use(thank_you_page);
// app.use(people_router);
// app.use(prayer_schedule_router);
// app.use(user_router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
