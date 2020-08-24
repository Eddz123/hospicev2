const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.render('reports/reports',{
        title : 'Reports',
        reportsActive : 'active'
    });
});






module.exports = router;