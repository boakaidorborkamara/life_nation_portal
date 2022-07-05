const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db-config/database');

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
    }
}, {
    tableName: "people" //customize table name
});


//create a table from model
Parent.sync()
    .then(() => {
        console.log("People table sucessfully created");
    })


module.exports = People;