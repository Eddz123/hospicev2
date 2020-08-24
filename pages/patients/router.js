const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.render('patients/patients',{
        title : 'Patients',
        patientActive : 'active',
        openPatient :false
    });
});



/* GET users listing. */
router.get('/add_patient', function(req, res, next) {
    res.render('patients/add_patient');
});






module.exports = router;