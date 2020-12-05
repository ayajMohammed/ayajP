var mongoose = require('mongoose')
let userSchema = new mongoose.Schema({

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
    },
    

}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = mongoose.model('user', userSchema);





