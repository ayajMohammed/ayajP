var mongoose = require('mongoose');
require('../src/models/user.model')

function dbConnection() {

    mongoose.connect('mongodb://localhost:27017/Practice').then(() => {
        console.log("Database connected successfully");

    })
        .catch((error) => {
            console.log("Error in connecting to Database");
        });

}
module.exports = {
    dbConnection
}
