const path = require('path');
const express =require('express');
const router =express.Router();

router.use((req, res, next)=>{
    res.status(404);
    // res.sendFile(path.join(__dirname, '../', 'views', '404.html'))
    res.render('404',{pageTitle: '404'})
})

module.exports=router;