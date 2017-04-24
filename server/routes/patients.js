var express = require('express');

var routerPatients = express.Router();

routerPatients.get('/patients', function(req,res,next){
    res.send('this is the patients page');
})


module.exports = routerPatients;