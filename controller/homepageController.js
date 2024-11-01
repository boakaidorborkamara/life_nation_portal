// display homepage
const homepage = (req, res) => {
  console.log("req user", req.user);
  // req.logout((err) => {
  //   if (err) {
  //     // return next(err);
  //     console.log(err);
  //     return;
  //   }

  //   console.log("log out");
  // });
  res.render("../view/index");
};

module.exports = homepage;
