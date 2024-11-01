const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);
const { passport } = require("./middleware/passport");

const path = require("path");

// create an express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");

// enable usage of static file
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

// connect to database and create tables from models
const db = require("./db-config/database");

// session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: "portalDB.db", dir: "./" }),
  })
);

app.use(passport.authenticate("session"));

//ROUTES
const signup_router = require("./route/signup-router");
const homepage_router = require("./route/homepage_router");
const prayer_groups_router = require("./route/prayer-groups-router");
const testimonies_router = require("./route/testimonies-router");
const discussions_router = require("./route/discussion-router");
const login_router = require("./route/login-router");
const logout_router = require("./route/logout-router");

app.use(signup_router);
app.use(homepage_router);
app.use(prayer_groups_router);
app.use(testimonies_router);
app.use(discussions_router);
app.use(login_router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
