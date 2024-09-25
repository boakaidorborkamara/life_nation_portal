const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");

const PrayerRegion = sequelize.define(
  "PrayerGroup",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "prayer_region", //customize table name
  }
);

//create a table from model
PrayerRegion.sync().then(() => {
  console.log("User table sucessfully created");
});

module.exports = PrayerRegion;
