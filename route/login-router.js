const express = require("express");
const { passport, checkAuthenticated } = require("../middleware/passport");

const loginController = require("../controller/loginController");

const router = express.Router();

router.get("/login", loginController.displayLoginForm);

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    // handle response if there's no user
    if (!user) {
      console.log("no user");
      return res.json({
        status: "OK",
        code: 1,
        message: "We couldn't find an account with those details.",
      });
    }

    // log user in
    req.logIn(user, (err) => {
      console.log("uuuuuu", user);
      if (err) {
        return next(err);
      }

      if (user) {
        res.json({ status: "OK", code: 0, message: "Login Successful" });
      }
    });
  })(req, res, next);
});

// router.post("/login", function (req, res, next) {
//   passport.authenticate("local", function (err, user, info, status) {
//     console.log("uss", user);
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.redirect("/login");
//     }
//     res.redirect("/prayer-groups");
//   })(req, res, next);
// });

module.exports = router;
