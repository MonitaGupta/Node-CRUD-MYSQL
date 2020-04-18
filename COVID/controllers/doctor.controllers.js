const db = require('../database/connection')
const doctor = require('../model/doctor.model')

const addPatient = async function(req, res) {
    try {
        let pool = await db.getConnection();
        var input = {
            connection: pool,
            patientId: req.query.patientid,
            symptomsList: req.query.symptomslist,
            doctorId: req.query.doctorid,
            medicationsList: req.query.medicationslist
        }

        const objList= await doctor.post(input).catch(error => 
            res.send({message: "error"}));

        res.status(200).json({message: 'Insertion completed'})
        
    } catch (err){
        res.status(201).json({message: err});
    }
}
module.exports.addPatient = addPatient;

const readPatient = async function(req, res) { 
    try {
        let pool = await db.getConnection();

        let input = {
            connection: pool,
            patientId: req.query.patientid
        }
        let objList = await doctor.get(input);
        
        res.send(objList);
        res.end();
    } catch (error) {
        return ({error: error});
    }   
}
module.exports.readPatient = readPatient;

const readNewSymptoms = async function(req, res) { 
    try {
        let pool = await db.getConnection();

        let input = {
            connection: pool,
            patientId: req.query.patientid
        }
        let objList = await doctor.getNewSymptoms(input);
        
        res.send(objList);
        res.end();
    } catch (error) {
        return ({error: error});
    }   
}
module.exports.readNewSymptoms = readNewSymptoms;
