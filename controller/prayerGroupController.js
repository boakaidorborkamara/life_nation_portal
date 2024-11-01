// IMPORT
const { raw } = require("body-parser");
const PrayerGroup = require("../model/prayer-group");
const prayerGroup = require("../model/prayer-group");

// display all prayer groups page
const displayPrayerGroupsPage = async (req, res) => {
  try {
    console.log("userSSSS", req.user);

    let prayer_groups = await prayerGroup.findAll({
      include: "User",
      required: true,
      raw: true,
    });

    // console.log("prayer group", prayer_groups);

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
  let group_id = req.params.id;
  console.log("group id", group_id);
  try {
    let prayer_group_details = await prayerGroup.findByPk(group_id);
    console.log(prayer_group_details);
    res.render("../view/prayer-group-details", {
      link: "/prayer-groups",
      prayer_group_details: prayer_group_details,
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

  // baafbaf1-9350-4737-b019-9ec8db39acc1
  // 09b6151b-6285-41ac-bfb1-e36dc0055051
  let logged_in_user = req.user;
  prayer_group_info["UserId"] = logged_in_user.id;

  console.log("prayer", prayer_group_info);

  // validate
  if (
    !prayer_group_info.name &&
    !prayer_group_info.description &&
    !prayer_group_info.region &&
    !prayer_group_info.whatsapp_link &&
    !prayerGroup.UserId
  ) {
    return res.status(403).json({
      code: 1,
      status: "error",
      message: "Required Fields Missing",
      detail: "Please provide details for all of the required fields.",
    });
  }

  try {
    // add new group to database
    let prayer_group_created = await prayerGroup.create(prayer_group_info);

    if (prayer_group_created) {
      res.status(201).json({
        code: 0,
        status: "success",
        message: "Account created!",
        data: prayer_group_created.dataValues,
      });
    }
  } catch (err) {
    console.log("err", err);
  }
};

// join group
const joinPrayerGroup = async (req, res) => {
  console.log("join request", req.body);

  let request_info = req.body;
  let user_prefer_group = await PrayerGroup.findByPk(request_info.group_id, {
    raw: true,
  });

  // check if members value is null
  if (!user_prefer_group.members) {
    user_prefer_group.members = [request_info.user_id];
  } else {
    if (user_prefer_group.members.includes(request_info.user_id) !== true) {
      request_info.members = [user_prefer_group.members];
      request_info.push(request_info.user_id);
    }
  }

  console.log(user_prefer_group);
};

module.exports = {
  displayPrayerGroupsPage,
  displayPrayerGroupsForm,
  displayPrayerGroupsDetails,
  addPrayerGroup,
  joinPrayerGroup,
};
