const dbConnection = require('../database/connection')

const addPatient = async function(userInfo) {
    try {
        let sql = `insert into patient (name, age, gender, doctor_id) values (${userInfo.name}, ${userInfo.age}, ${userInfo.doctorId}, ${userInfo.gender})`;
        let obj = {
            connection: userInfo.connection,
            sql: sql
        }
        await dbConnection.executeQuery(obj).catch(error => console.log(error));
        return ({message: 'Transaction completed'});
    } catch (err) {
        return ({message: err});
    }
}
module.exports.addPatient = addPatient;

const addDoctor = async function(userInfo) {
    try {
        let sql = `insert into doctor (name, email, city) values (${userInfo.name}, ${userInfo.email}, ${userInfo.city})`;
        let obj = {
            connection: userInfo.connection,
            sql: sql
        }
        await dbConnection.executeQuery(obj).catch(error => console.log(error));
        return ({message: 'Transaction completed'});
    } catch (err) {
        return ({message: err});
    }
}
module.exports.addDoctor = addDoctor;
