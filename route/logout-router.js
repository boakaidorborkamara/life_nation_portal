const express = require("express");
const router = express.Router();

// allow logged in user to logout
router.post("/logout", (req, res, next) => {
  console.log("logging out");
  // call logout method created by passport js middleware
  req.logout((err) => {
    if (err) {
      // return next(err);
      console.log(err);
      return;
    }
    res.status(200).json({ status: "OK", code: 0, msg: "Logout successful" });
  });
});

module.exports = router;
