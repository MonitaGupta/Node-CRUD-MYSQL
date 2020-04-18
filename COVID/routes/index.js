const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers')
const patientController = require('../controllers/patient.controllers')
const doctorController = require('../controllers/doctor.controllers')
const adminController = require('../controllers/admin.controllers')

router.get('/', function(req, res) {
    res.json({message: "Connection successful"})
})

router.get('/login/:email', userController.login);

/*router.post('/users',  userController.create);   //Create                                                 // C
router.get('/users',   userController.get);        // Read
router.put('/users',   userController.update);     // Update
router.delete('/users', UseuserControllerrController.remove);     // Delete
*/

router.get('/admin', function(req, res, next) {
    res.json({status:"success", message:"Welcome admin", data:{"version_number":"v1.0.0"}})
  });
router.post('/admin/adddoctor', adminController.addDoctor);
router.post('/admin/addpatient',  adminController.addPatient);

router.get('/doctor', function(req, res, next) {
    res.json({status:"success", message:"Welcome Doctor", data:{"version_number":"v1.0.0"}})
  });

router.post('/doctor/addpatient',  doctorController.addPatient);
router.get('/doctor/readPatient', doctorController.readPatient);
router.get('/doctor/readNewSymptoms', doctorController.readNewSymptoms); 


router.get('/patient', function(req, res, next) {
    res.json({status:"success", message:"Welcome patient", data:{"version_number":"v1.0.0"}})
  });

router.post('/addSymptoms', patientController.postSymptoms);
router.get('/getSymptomsList/:patientid', patientController.symptomsList); 

module.exports = router;