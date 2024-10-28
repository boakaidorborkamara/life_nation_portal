const Sequelize = require("sequelize");

// create db connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./portalDB.db",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;
