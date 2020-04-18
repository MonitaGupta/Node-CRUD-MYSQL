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

const post = async function(userInfo) {
    try {
        console.log(symptoms);
        let sql = `insert into patient_symptoms (patient_id, symptoms, created_on) values (${userInfo.patientId}, ${userInfo.symptomsList}, now())`;
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
