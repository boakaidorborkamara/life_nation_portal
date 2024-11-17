const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);
const { passport } = require("./middleware/passport");
const db = require("./db-config/database");
const path = require("path");

//ROUTERS
const signup_router = require("./route/signup-router");
const homepage_router = require("./route/homepage_router");
const prayer_groups_router = require("./route/prayer-groups-router");
const testimonies_router = require("./route/testimonies-router");
const resources_router = require("./route/resources-router");
const discussions_router = require("./route/discussion-router");
const login_router = require("./route/login-router");
const logout_router = require("./route/logout-router");

// create an express app
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

// use session storage
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: "portalDB.sqlite", dir: "./" }),
  })
);

app.use(passport.authenticate("session"));

app.use(signup_router);
app.use(homepage_router);
app.use(prayer_groups_router);
app.use(testimonies_router);
app.use(discussions_router);
app.use(resources_router);
app.use(login_router);
app.use(logout_router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
