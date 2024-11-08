// IMPORT
const { raw } = require("body-parser");
const PrayerGroup = require("../model/prayer-group");
const prayerGroup = require("../model/prayer-group");

// display all prayer groups page
const displayPrayerGroupsPage = async (req, res) => {
  try {
    let logged_in_user = req.user;

    let prayer_groups = await prayerGroup.findAll({
      include: "User",
      required: true,
      raw: true,
    });

    console.log("lu", prayer_groups);

    res.render("../view/groups", {
      link: "/prayer-groups",
      prayer_groups: prayer_groups,
      user: logged_in_user,
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

  console.log(prayer_group_info);

  // baafbaf1-9350-4737-b019-9ec8db39acc1
  // 09b6151b-6285-41ac-bfb1-e36dc0055051
  let logged_in_user = req.user;
  prayer_group_info["UserId"] = logged_in_user.id;

  console.log("prayer", prayer_group_info);

  // validate
  if (
    !prayer_group_info.name &&
    !prayer_group_info.community &&
    !prayer_group_info.address &&
    !prayer_group_info.contacts &&
    !prayer_group_info.meeting_date &&
    !prayer_group_info.meeting_time &&
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
        message: "Group created!",
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

  let user_id = req.user.id;
  let request_info = req.body;

  let user_prefer_group = await PrayerGroup.findByPk(request_info.group_id);

  // check if user is already part of the group they want to join
  if (user_prefer_group.members !== null) {
    let isUserPartOfSelectedGroup = user_prefer_group.members.includes(user_id);

    if (isUserPartOfSelectedGroup) {
      console.log("user is part of the selected group");
      return;
    }
  }

  // check if user is part of any other prayer group
  let groups = await PrayerGroup.findAll({ raw: true });
  // console.log("grops", groups);
  groups.forEach((group) => {
    if (group.members.includes(user_id)) {
      console.log("user is part of a group");

      return res.status(403).json({
        code: 1,
        status: "error",
        message: "Already a group member",
        detail: `You are already part of ${group.name} & can not be added to another group.`,
      });
    }
  });

  // return;
  let update_values =
    user_prefer_group.members.length === 0
      ? [user_id]
      : [...user_prefer_group.members, user_id];

  let isUpdated = await user_prefer_group.update({
    members: update_values,
    members_count: (user_prefer_group.members.length += 1),
  });

  if (isUpdated) {
    return res.status(200).json({
      code: 0,
      status: "success",
      message: "Click the link below to complete",
      data: user_prefer_group,
    });
  }

  return;

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
