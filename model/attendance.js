const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db-config/database');


const Attendance = sequelize.define("Attendance", {
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
    }
}, {
    tableName: "attendance" //customize table name
});


//create a table from model
Attendance.sync()
    .then(() => {
        console.log("Attendance table sucessfully created");
    })


module.exports = Attendance;