const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers')
const patientController = require('../controllers/patient.controllers')

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
/*router.post('/admin', adminController.create); //Add new doctor details
router.get('/admin/doctor',  adminController.getAll); //Read all doctor's details
router.get('/admin/:doctorid', adminController.get); // Read 1 doctor detail
router.put('/admin/:doctorId', adminController.update);  // Update 1 doctor details
router.delete('/admin/:doctorId', adminController.remove);  // Delete 1 doctor details
*/

router.get('/doctor', function(req, res, next) {
    res.json({status:"success", message:"Welcome Doctor", data:{"version_number":"v1.0.0"}})
  });
  /*
router.post('/doctor', doctorController.create); //Add new doctor details
router.get('/doctor/patient',  doctorController.getAll); //Read all patient details
router.get('/doctor/:patientId', doctorController.get); // Read 1 patient detail
router.put('/doctor/:patientId', doctorController.update);  // Update 1 patient details
router.delete('/doctor/:patientId', doctorController.remove);  // Delete 1 patient details

*/

/*router.get('/patient', function(req, res, next) {

    res.json({status:"success", message:"Welcome patient", data:{"version_number":"v1.0.0"}})
  });*/
router.get('/patient',  patientController.createConnection); 
router.post('/addSymptoms', patientController.postSymptoms);
router.get('/getSymptomsList', patientController.getAllList); 

module.exports = router;