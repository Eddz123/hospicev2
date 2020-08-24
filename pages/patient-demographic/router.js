const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.render('patient-demographic/info',{
        title : 'Patient Demographic',
        openPatient : true 
    });
    res.end();
});



/// ADMISSION

router.get('/consent',(req,res,next)=>{
    res.render('patient-demographic/consent/info',{
        title : 'Consent',
        openPatient : true
    });
    res.end();
});

router.get('/staff-assignment',(req,res,next)=>{
    res.render('patient-demographic/staff_assignment/info',{
        title : 'Staff Assignment',
        openPatient : true
    });
    res.end();
});


router.get('/chart-checklist',(req,res,next)=>{
    res.render('patient-demographic/chartchecklist/info',{
        title : 'Chart Checklist',
        openPatient : true
    });
    res.end();
});









router.get('/nursing-assessment',(req,res,next)=>{
    res.render('patient-demographic/nursing_assessment/info',{
        title : 'Nursing Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/add-nursing-assessment',(req,res,next)=>{
    res.render('patient-demographic/nursing_assessment/add_nursing',{
        title : 'Add Nursing Assessment',
        openPatient : true
    });
    res.end();
});


router.get('/spiritual-assessment',(req,res,next)=>{
    res.render('patient-demographic/spiritual/info',{
        title : 'Spiritual Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/add-spiritual-assessment',(req,res,next)=>{
    res.render('patient-demographic/spiritual/add_spiritual',{
        title : 'Add Spiritual Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/psychosocial-assessment',(req,res,next)=>{
    res.render('patient-demographic/psychosocial/info',{
        title : 'Psychosocial Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/add-psychosocial-assessment',(req,res,next)=>{
    res.render('patient-demographic/psychosocial/add_psychosocial',{
        title : 'Add Psychosocial Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/visitnotes-assessment',(req,res,next)=>{
    res.render('patient-demographic/visitnotes/info',{
        title : 'Visit Notes Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/add-visitnotes-assessment',(req,res,next)=>{
    res.render('patient-demographic/visitnotes/add_visitnotes',{
        title : 'Add Visit Notes Assessment',
        openPatient : true
    });
    res.end();
});






router.get('/volunteer-assessment',(req,res,next)=>{
    res.render('patient-demographic/vol_visitnotes/info',{
        title : 'Visit Notes Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/add-volunteer-assessment',(req,res,next)=>{
    res.render('patient-demographic/vol_visitnotes/add_vol-visitnotes',{
        title : 'Add Visit Notes Assessment',
        openPatient : true
    });
    res.end();
});
















router.get('/mdf2f-assessment',(req,res,next)=>{
    res.render('patient-demographic/mdf2f_visitnotes/info',{
        title : 'MD Visit Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/add-mdf2f-assessment',(req,res,next)=>{
    res.render('patient-demographic/mdf2f_visitnotes/add_mdf2f',{
        title : 'Add Md Visit Assessment',
        openPatient : true
    });
    res.end();
});


router.get('/ha-visitnotes-assessment',(req,res,next)=>{
    res.render('patient-demographic/ha_visitnotes/info',{
        title : 'MD Visit Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/add-ha-visitnotes-assessment',(req,res,next)=>{
    res.render('patient-demographic/ha_visitnotes/add_ha-visitnotes',{
        title : 'Add Ha Visit Assessment',
        openPatient : true
    });
    res.end();
});




router.get('/idg-assessment',(req,res,next)=>{
    res.render('patient-demographic/idg/info',{
        title : 'Idg Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/add-idg-assessment',(req,res,next)=>{
    res.render('patient-demographic/idg/add-new-idg',{
        title : 'Add Idg Assessment',
        openPatient : true
    });
    res.end();
});




router.get('/poc-assessment',(req,res,next)=>{
    res.render('patient-demographic/poc/info',{
        title : 'Idg Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/add-poc-assessment',(req,res,next)=>{
    res.render('patient-demographic/poc/add_poc-summary',{
        title : 'Add Idg Assessment',
        openPatient : true
    });
    res.end();
});





router.get('/poc-list',(req,res,next)=>{
    res.render('patient-demographic/poc-list/info',{
        title : 'Poc List Assessment',
        openPatient : true
    });
    res.end();
});









// COMPLIANCE TAB 


router.get('/Lcd-Eligibility',(req,res,next)=>{
    res.render('patient-demographic/lcd-eligibility/info',{
        title : 'LCD ELIGIBILITY',
        openPatient : true
    });
    res.end();
});


router.get('/His-Admission',(req,res,next)=>{
    res.render('patient-demographic/his_admission/info',{
        title : 'HIS ADMISSION',
        openPatient : true
    });
    res.end();
});


router.get('/His-Discharge',(req,res,next)=>{
    res.render('patient-demographic/his_discharge/info',{
        title : 'HIS DISCHARGE',
        openPatient : true
    });
    res.end();
});


router.get('/Decline-Of-Status',(req,res,next)=>{
    res.render('patient-demographic/poc-list/info',{
        title : 'Poc List Assessment',
        openPatient : true
    });
    res.end();
});







// BEREAVEMENT TAB


router.get('/Initial-Bereavement-Assessment',(req,res,next)=>{
    res.render('patient-demographic/bereavement-initial-assessment/info',{
        title : 'Initial Bereavement Assessment',
        openPatient : true
    });
    res.end();
});


router.get('/Add-Initial-Bereavement-Assessment',(req,res,next)=>{
    res.render('patient-demographic/bereavement-initial-assessment/add-initial-bereavement',{
        title : 'New Initial Bereavement Assessment',
        openPatient : true
    });
    res.end();
});





router.get('/Bereavement-Poc',(req,res,next)=>{
    res.render('patient-demographic/bereavement-poc/info',{
        title : 'Bereavement Poc',
        openPatient : true
    });
    res.end();
});


router.get('/Add-Poc-Bereavement-Assessment',(req,res,next)=>{
    res.render('patient-demographic/bereavement-poc/add_poc_bereavement',{
        title : 'New Poc Bereavement Assessment',
        openPatient : true
    });
    res.end();
});





router.get('/Bereavement-Letters',(req,res,next)=>{
    res.render('patient-demographic/bereavement-letters/info',{
        title : 'Bereavement Letters',
        openPatient : true
    });
    res.end();
});

router.get('/Add-Bereavement-Letters',(req,res,next)=>{
    res.render('patient-demographic/bereavement-letters/add_bereavement_letter',{
        title : 'New Bereavement Post Death Assessment',
        openPatient : true
    });
    res.end();
});





router.get('/Bereavement-Post-Death-Assessment',(req,res,next)=>{
    res.render('patient-demographic/bereavement-post-death-assessment/info',{
        title : 'Bereavement Post Death Assessment',
        openPatient : true
    });
    res.end();
});


router.get('/Add-Post-Death-Assessment',(req,res,next)=>{
    res.render('patient-demographic/bereavement-post-death-assessment/add-post-death-assessment',{
        title : 'New Bereavement Post Death Assessment',
        openPatient : true
    });
    res.end();
});



router.get('/Bereavement-Post-Death-Support',(req,res,next)=>{
    res.render('patient-demographic/bereavement-post-death-support/info',{
        title : 'Bereavement Post Death Support',
        openPatient : true
    });
    res.end();
});


router.get('/Add-Post-Death-Support',(req,res,next)=>{
    res.render('patient-demographic/bereavement-post-death-support/add-post-death-support',{
        title : 'New Bereavement Post Death Support',
        openPatient : true
    });
    res.end();
});




router.get('/Care-Overview',(req,res,next)=>{
    res.render('patient-demographic/careoverview/info',{
        title : 'New Bereavement Post Death Support',
        openPatient : true
    });
    res.end();
});



/// MEDICATION 


router.get('/Medication',(req,res,next)=>{
    res.render('patient-demographic/medication/info',{
        title : 'New Bereavement Post Death Support',
        openPatient : true
    });
    res.end();
});


router.get('/Add-Update-Medication',(req,res,next)=>{
    res.render('patient-demographic/medication/add-medication',{
        title : 'Add Update New Medication',
        openPatient : true
    });
    res.end();
});









module.exports = router;
