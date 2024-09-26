const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");

const PrayerGroup = sequelize.define(
  "PrayerGroup",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    community: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whatsapp_link: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "prayer_group", //customize table name
  }
);

//create a table from model
PrayerGroup.sync().then(() => {
  console.log("Prayer Group table sucessfully created");
});

module.exports = PrayerGroup;
