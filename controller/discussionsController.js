// IMPORT

// display all prayer groups page
const displayDiscussionsPage = async (req, res) => {
  res.render("../view/testimonies", { link: "discussions" });
};

module.exports = {
  displayDiscussionsPage,
};
