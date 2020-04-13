const dbConnection = require('../database/connection')

const startConnection = async function(){
    try {
        let dbObj = await dbConnection.createConnection();
        return dbObj
    } catch (error) {
        return ({error: error});
    }
}
module.exports.startConnection = startConnection;

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
    var patientId = userInfo.patientId;
    var symptoms = userInfo.symptomsList;
    symptoms.forEach(async name => { 
        let sql = `insert into patient_details (patient_id, symptoms, created) values (${patientId}, ${name}, now())`;
        let obj = {
            connection: userInfo.connection,
            sql: sql
        }

        const queryObj = await dbConnection.executeQuery(obj)
      }); 
      return {message: "executed model"};
}
module.exports.post = post;

const dbCloseConnection = function(userInfo){
    const dbObj = dbConnection.closeConnection(userInfo);
    return dbObj;
}
module.exports.dbCloseConnection = dbCloseConnection;
