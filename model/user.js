const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db-config/database");

// user model
const User = sequelize.define(
  "User",
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(7),
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
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
User.sync({ force: false }).then(() => {
  console.log("User table sucessfully created");
});

module.exports = User;
