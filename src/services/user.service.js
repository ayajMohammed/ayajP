var mongoose = require("mongoose");
var userSchema = require('mongoose').model('user');
const passwordHash = require('password-hash')
let jwt = require('jsonwebtoken');
let moment = require('moment')

exports.findOne = async (criteria) => {
	try {
		return await userSchema.findOne(criteria);
	}
	catch (error) {
		return false;
	}
};
exports.passwordVerify = async (password, reqPassword) => {
	let result = passwordHash.verify(reqPassword, password.password)
	if (result) {
		const attempts = await userSchema.findOneAndUpdate({ email: password.email }, { loginAttempts: 0 })

	}

	return result
}
// exports.createToken = async (reqData) => {
// 	let jwt_secrect = "javeed";
// 	const token = jwt.sign(
// 		{
// 			exp: Math.floor(Date.now() / 1000) + 60 * 20,
// 			id: reqData.id,
// 			email: reqData.email,
// 		},
// 		jwt_secrect
// 	);
// 	return token
// }

exports.loginAttempts = async (body) => {
	let loginattempts = body.loginAttempts
	var a = moment(body.updatedAt);
	var b = moment();
	var timeDif = b.diff(a, 'seconds')
	let attemptsCheck = loginattempts < 3 || timeDif >= 60
	return attemptsCheck

}
exports.appendAttempts = async (body) => {
	let result = await userSchema.findOneAndUpdate({ email: body.email }, { $inc: { loginAttempts: 1 } })
	return result


}




exports.createService = async (reqData) => {
	try {
		let hashedPassword = passwordHash.generate(reqData.password)
		let obj = {
			name: reqData.name,
			email: reqData.email,
			mobile: reqData.mobile,
			password: hashedPassword,
			loginAttempts: 0

		}
		let stdrec = await new userSchema(obj)
		return await stdrec.save()


	}
	catch (error) {
		return false;
	}
};

exports.findAllUser = async (query) => {
	try {
		let result = await userSchema.aggregate(
			[{ $match: { name: query.name } }]
		);
		return result

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