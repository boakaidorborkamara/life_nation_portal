const attendanceTable = require("../model/attendance");

//Display all attendants
const attendance_list = (req, res) => {
    let all_attendants = "";
    (async() => {
        all_attendants = await attendanceTable.findAll();
        res.send({ "status_code": 0, "status_message": "all prayer dates", all_attendants });
    })();

}







module.exports = {
    attendance_list
}