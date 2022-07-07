const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db-config/database');


const PrayerSchedule = sequelize.define("PrayerSchedule", {
    time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    whatsAppLink: {
        type: DataTypes.STRING
    },
    sectionOfDay: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "prayer_schedule" //customize the table name
});


//create a table from model
PrayerSchedule.sync()
    .then(() => {
        console.log("Prayer Schedule table sucessfully created");
    })


module.exports = PrayerSchedule;