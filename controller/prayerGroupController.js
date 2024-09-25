// IMPORT
const prayerGroup = require("../model/prayer-group");

// display all prayer groups page
const displayPrayerGroupsPage = async (req, res) => {
  try {
    console.log("working");
    let prayer_groups = await prayerGroup.findAll();
    console.log("prayer groups", prayer_groups);

    res.render("../view/groups", {
      link: "/prayer-groups",
      prayer_groups: prayer_groups,
    });
  } catch (err) {
    console.log(err);
  }
};

// display prayer group details
const displayPrayerGroupsDetails = async (req, res) => {
  try {
    res.render("../view/prayer-group-details", {
      link: "/prayer-groups",
    });
  } catch (err) {
    console.log(err);
  }
};

// display form to add new prayer group
const displayPrayerGroupsForm = (req, res) => {
  res.render("../view/add-prayer-group");
};

// add prayer group
const addPrayerGroup = async (req, res) => {
  let prayer_group_info = req.body;

  console.log("prayer", prayer_group_info);

  try {
    let result = await prayerGroup.create(prayer_group_info);
    console.log("result", result);
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = {
  displayPrayerGroupsPage,
  displayPrayerGroupsForm,
  displayPrayerGroupsDetails,
  addPrayerGroup,
};
