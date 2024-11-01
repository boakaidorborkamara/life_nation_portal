// IMPORT

// display all prayer groups page
const displayTestimoniesPage = async (req, res) => {
  res.render("../view/testimonies", { link: "/testimonies" });
};

module.exports = {
  displayTestimoniesPage,
};
