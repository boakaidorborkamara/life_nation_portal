const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user", //customize table name
  }
);

//create a table from model
User.sync().then(() => {
  console.log("User table sucessfully created");
});

module.exports = User;
