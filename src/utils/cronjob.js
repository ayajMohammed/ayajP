var cron = require('node-cron');
var async = require('async');
user = require('../models/user.model')


var task = cron.schedule('*/10 * * * * *', function () {
    console.log('cron run every 10 sec');
});

task.start();

