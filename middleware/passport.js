const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("../model/user");

passport.use(
  new LocalStrategy(function (username, password, done) {
    console.log("verifying user credential..");
    User.findOne({ where: { phone_number: username }, raw: true })
      .then((user) => {
        console.log("verifed user", user);
        if (!user) {
          return done(null, false);
        }
        // if (!user.verifyPassword(password)) {
        //   return done(null, false);
        // }
        return done(null, user);
      })
      .then((err) => {
        if (err) {
          return done(err);
        }
      });
  })
);

// store user data in session
passport.serializeUser((user, done) => {
  console.log("serialize user", user.id);
  done(null, { id: user.id });
});

// get user data out of session
passport.deserializeUser(async (user, done) => {
  console.log("deserialize user...");
  let id = user.id;

  try {
    // find user based on provided id
    let found_user = await User.findOne({ where: { id: id }, raw: true });

    console.log("found", found_user);

    done(null, found_user);
  } catch (err) {
    console.log("error", err);
    done(err);
  }
});

function checkAuthenticated(req, res, next) {
  console.log("authentiinng");
  console.log("aut", req.isAuthenticated());
  if (req.isAuthenticated()) {
    // redirect user to dashboard if logged in but try visiting the homepage
    if (req.path === "/") {
      res.redirect("/prayer-groups");
    }
    return next();
  }

  res.redirect("/login");
}

module.exports = { passport, checkAuthenticated };
