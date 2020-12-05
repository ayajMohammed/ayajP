var mongoose = require("mongoose");
var userSchema = require('mongoose').model('user');
const passwordHash=require('password-hash')

exports.findOne = async (criteria) => {
	try {
	return await userSchema.findOne(criteria);
	}
	catch (error) {
		return false;
	}
};




exports.createService = async (reqData) => {
	try {
		let hashedPassword=passwordHash.generate(reqData.password)
			let obj={
				name:reqData.name,
				email:reqData.email,
				mobile:reqData.mobile,
				password:hashedPassword,
				loginAttempts:0

			}
			let stdrec = await new userSchema(obj)
            return await stdrec.save()
             
    
	}
	catch (error) {
		return false;
	}
};




/* examples */

// exports.checkEmail = async (query) => {
// 	try {
	
//         let obj ={
//             email:query.email
//         }
// 		return await userSchema.findOne(obj);
// 	}
// 	catch (error) {
// 		return false;
// 	}
// };

// exports.checkmobil=async(reqData)=>{
//     let mob=await userSchema.findOne({mobile:reqData.email})
//     return mob
// }