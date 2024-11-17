const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");
const prayer_schedule = require("./prayer_schedule");

const Address = sequelize.define(
  "Address",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "address", //customize table name
  }
);
