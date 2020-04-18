const patient = require('../model/patient.model')
const db = require('../database/connection')

const symptomsList = async function(req, res) { 
    try {
        let pool = await db.getConnection();

        let input = {
            connection: pool,
            patientId: req.params.patientid
        }
        let objList = await patient.get(input);
        
        res.send(objList);
        res.end();
    } catch (error) {
        return ({error: error});
    }
    
}
module.exports.symptomsList = symptomsList;

const postSymptoms = async function(req, res) {
    try {
        let pool = await db.getConnection();
        var input = {
            connection: pool,
            patientId: req.query.patientId,
            symptomsList: req.query.symptomsList
        }
        const objList= await patient.post(input).catch(error => 
            res.send({message: "error"}));

        res.status(200).json({message: 'Insertion completed'})
        
    } catch (err){
        res.status(201).json({message: err});
    }
}
module.exports.postSymptoms = postSymptoms;

