var cron = require('node-cron');
var nodemailer=require('nodemailer');
var mongoose=require('mongoose')
// var userSchema = require('mongoose').model('user');
var getEmails=require("../controllers/user.controller")
var user = require('../models/user.model')
var moment = require('moment');
var async = require('async');
var utility = require('./utility');
user = require('../models/Users')


// let array=["javeedshaaik@gmail.com","javeed@yopmail.com"]

var task = cron.schedule('*/10 * * * * *',  ()=> {
    console.log("hellooo")
    user.aggregate().then((result)=>{
        console.log("heloooo",result)
    })

//  function getAllEmails()

});

task.start();


