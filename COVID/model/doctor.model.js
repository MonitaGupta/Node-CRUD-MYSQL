const dbConnection = require('../database/connection')

const get = async function(userInfo){ 
    let sql = `select * from patient_details where patient_id = ${userInfo.patientId}`;
    let input = {
        sql: sql,
        connection: userInfo.connection 
    }

    let queryObj = await dbConnection.executeQuery(input);
    if(!queryObj)
        console.log('error');

    return queryObj;
}
module.exports.get = get;

const getNewSymptoms = async function(userInfo){ 
    let sql = `select * from patient_symptoms where patient_id = ${userInfo.patientId} order by created_on DESC LIMIT 1`;
    let input = {
        sql: sql,
        connection: userInfo.connection 
    }

    let queryObj = await dbConnection.executeQuery(input);
    if(!queryObj)
        console.log('error');

    return queryObj;
}
module.exports.getNewSymptoms = getNewSymptoms;

const post = async function(userInfo) {
    try {
        let sql = `insert into patient_details (doctor_id, patient_id, symptoms, medication, created_on) values (${userInfo.doctorId}, ${serInfo.patientId}, ${userInfo.symptomsList}, ${userInfo.medicationsList}, now())`;
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
module.exports.post = post;
