const express = require('express');
const router = express.Router();






router.get('/ShowHide',(req,res,next)=>{
    if(document.getElementById('').checked) {
        document.getElementById('').style.display = 'none';
    }
    else{
        document.getElementById('').style.display='block';
    }
});





module.exports = router;
