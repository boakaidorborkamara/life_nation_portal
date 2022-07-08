const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db-config/database');
const prayer_schedule = require('./prayer_schedule');


const People = sequelize.define("People", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    whatsAppNumber: {
        type: DataTypes.STRING
    },
    facebookHandle: {
        type: DataTypes.STRING
    },
    availableTime: {
        type: DataTypes.STRING
    }
}, {
    tableName: "people" //customize table name
});

//create foreign key with a one to many relationship
prayer_schedule.hasMany(People);
People.belongsTo(prayer_schedule);



//create a table from model
People.sync()
    .then(() => {
        console.log("People table sucessfully created");
    })


module.exports = People;