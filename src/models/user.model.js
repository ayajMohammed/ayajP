var mongoose = require('mongoose')
let practiceSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    loginAttempts:{
        type:Number
    }

})

module.exports = mongoose.model('Details', practiceSchema);





