const patient = require('../model/patient.model')

let obj;
const createConnection = async function(req, res){
    try {
        if(obj)
            return res.send({message: "connection already present"});

        obj = await patient.startConnection();
        return res.send({message: "connection established"});
    } catch (error) {
        return {error: error};
    }
    
}
module.exports.createConnection = createConnection;

const closeConnection = async function(req, res){
    let connection = obj.con;
    let input = {
        connection: connection,
    }
    patient.dbCloseConnection(input);
    obj = null;
    return objClose;
}
module.exports.closeConnection = closeConnection;

const getAllList = async function(req, res) { 
    try {
        let patientId = req.query.patientId;

        let input = {
            connection: obj,
            patientId: patientId
        }
        let objList = await patient.get(input);
        
        res.send(objList);
        res.end();
    } catch (error) {
        return ({error: error});
    }
    
}
module.exports.getAllList = getAllList;

const postSymptoms = async function(req, res) {
    var input = {
        connection: obj,
        patientId: req.query.patientId,
        symptomsList: req.query.symptomsList.split(',')
    }
    var objList = await patient.post(input);
    res.send(objList)
    res.end();
}
module.exports.postSymptoms = postSymptoms;

