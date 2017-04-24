var mongoose = require('mongoose');
   // assert = require('assert');

// Connection URL
var url = 'mongodb://henrisco82:jaydenjames@ds039195.mlab.com:39195/hospital';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});

var DoctorSchema = mongoose.Schema({
     Name: {
        type: String,
        required: true,
        unique: true
    },
     Position: {
        type: String,
        required: true,
        unique: true
    },
     Specialization: {
        type: String,
        required: true,
        unique: true
    },
     Sex: {
        type: String,
        required: true,
        unique: true
    },
});

var doctor = mongoose.model('Doctors',DoctorSchema);

var express = require('express');

var routerDoctors = express.Router();

routerDoctors.get('/doctors', function(req,res,next){
    res.send('Go back to node js tutorials');
})


module.exports = routerDoctors;