const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.render('orders/orders',{
        title : 'Orders',
        ordersActive : 'active'
    });
});






module.exports = router;