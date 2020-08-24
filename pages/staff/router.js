const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.render('staff/staff',{
        title : 'Staff',
        staffActive : 'active'
    });
});



/* GET home page. */
router.get('/new_employee', function(req, res, next) {
    res.render('staff/employeeform');
});




/* GET home page. */
router.get('/new_insurance', function(req, res, next) {
    res.render('staff/insurranceform');
});




/* GET home page. */
router.get('/new_vendor', function(req, res, next) {
    res.render('staff/vendorform');
});








module.exports = router;