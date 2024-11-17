// IMPORT

// display all prayer groups page
const displayResourcesPage = async (req, res) => {
  res.render("../view/resources", { link: "/resources" });
};

module.exports = {
  displayResourcesPage,
};
