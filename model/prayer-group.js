const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");

// user model
const User = require("./user");

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

// Declear a one to many relationship between user and group with foreign key store in group table
User.hasMany(PrayerGroup, {
  foreignKey: {
    allowNull: true,
  },
});
PrayerGroup.belongsTo(User);

//create a table from model
PrayerGroup.sync({ force: false }).then(() => {
  console.log("Prayer Group table sucessfully created");
});

module.exports = PrayerGroup;
