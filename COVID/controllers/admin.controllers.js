const db = require('../database/connection')
const admin = require('../model/admin.model')

const addPatient = async function(req, res) {
    try {
        let pool = await db.getConnection();
        var input = {
            connection: pool,
            name: req.query.name,
            age: req.query.age,
            gender: req.query.gender,
            doctorId: req.query.doctorid
        }

        const objList= await admin.addPatient(input).catch(error => 
            res.send({message: "error"}));

        res.status(200).json({message: 'Insertion completed'})
        
    } catch (err){
        res.status(201).json({message: err});
    }
}
module.exports.addPatient = addPatient;

const addDoctor = async function(req, res) {
    try {
        let pool = await db.getConnection();
        var input = {
            connection: pool,
            name: req.query.name,
            email: req.query.email,
            city: req.query.city
        }

        const objList= await admin.addDoctor(input).catch(error => 
            res.send({message: "error"}));

        res.status(200).json({message: 'Insertion completed'})
        
    } catch (err){
        res.status(201).json({message: err});
    }
}
module.exports.addDoctor = addDoctor;