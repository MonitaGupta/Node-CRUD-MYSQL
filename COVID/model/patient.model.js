const dbConnection = require('../database/connection')

const get = async function(userInfo){ 
    let patientId = userInfo.patientId;
    let sql = `select * from patient_details where patient_id = ${patientId}`;
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
        var patientId = userInfo.patientId;
        var symptoms = userInfo.symptomsList;
        symptoms.forEach(async name => { 
            let sql = `insert into patient_details (patient_id, symptoms, created) values (${patientId}, ${name}, now())`;
            let obj = {
                connection: userInfo.connection,
                sql: sql
            }
            const queryObj = await dbConnection.executeQuery(obj).catch(error => console.log(error));
        });
        return ({message: 'completed'});
    } catch (err) {
        return ({message: err});
    }
 
}
module.exports.post = post;
