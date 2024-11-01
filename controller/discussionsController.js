// IMPORT

// display all prayer groups page
const displayDiscussionsPage = async (req, res) => {
  res.render("../view/discussions", { link: "discussions" });
};

module.exports = {
  displayDiscussionsPage,
};
