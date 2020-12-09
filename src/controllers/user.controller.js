const userService = require('../services/user.service'),
	jwt = require('../utils/auth')


exports.createUser = async (req, res) => {
	try {
		const reqData = Object.assign({}, req.body);
		const check = await userService.findOne({ email: reqData.email });
		if (check) {
			res.json({
				code: 404,
				msg: `${check.email} already exist`
			})

		} else {
			const checkMobile = await userService.findOne({ mobile: reqData.mobile })
			if (checkMobile) {
				res.json({
					code: 404,
					msg: `${checkMobile.mobile} already exist`
				})
			} else {
				let result = await userService.createService(reqData)
				if (result) {
					res.json({
						code: 2000,
						msg: "user registered sucessfully",
						data: result
					})
				} else {
					res.json({
						code: 5000,
						msg: "user registered failed",
					})
				}

			}



		}
	}
	catch (error) {
		console.log("error", error)

	}
};

module.exports.loginUser = async (req, res) => {
	const reqData = Object.assign({}, req.body);
	let user = await userService.findOne({ email: reqData.email })
	if (user) {
		let attemptCheck = await userService.loginAttempts(user)
		if (attemptCheck) {
			let result = await userService.passwordVerify(user, reqData.password)
			if (result) {
				const token = await jwt.generate(user);
				// let k=	user.remove("password");
				// 	console.log(k,"resss")
				const response = {
					user,
					accessToken: token
				};
				if (token) {
					res.json({
						code: 2000,
						msg: "login sucessfull",
						result: response
					})
				} else {
					res.json({
						code: 5000,
						msg: "login failed"
					})
				}
				// let token = await userService.createToken(login)
				// if (token) {
				// 	res.json({
				// 		code: 2000,
				// 		msg: "login sucessfull",
				// 		data: login,
				// 		token: token
				// 	})
				// } else {
				// 	res.json({
				// 		code: 5000,
				// 		msg: "login failed"
				// 	})
				// }

			} else {
				let attempts = await userService.appendAttempts(login)

				let x = (attempts.loginAttempts == 0) ? 3 : (attempts.loginAttempts == 1) ? 2 : (attempts.loginAttempts == 2) ? 1 : 0


				res.json({
					code: 5000,
					messaage: "Password wrong " + x + " attempts left"
				})



			}

		} else {
			res.json({
				code: 5000,
				msg: "account blocked for 1 minutes"
			})

		}




	} else {
		res.json({
			code: 5000,
			msg: `${reqData.email} does not exist`
		})
	}

}
module.exports.searchUser = async (req, res) => {
	const reqData = Object.assign({}, req.body);
	let userList = await userService.nameSearch(reqData)
	if (userList) {
		res.json({
			code: 200,
			msg: "users found sucessfully",
			result: userList
		})
	} else {
		res.json({
			code: 5000,
			msg: "can't find users"
		})
	}

}

module.exports.update = async function (req, res) {
	let reqData = Object.assign({}, req.body);
	let user = await userService.findOne({ _id: req.params.id })
	if (!user || user == null) {
		res.json({
			code: 5000,
			msg: "details not found to update"
		})


	} else {

		const query = {
			$set: reqData,
		}
		const updateUser = await userService.updateMany(query, req.params.id);
		if (updateUser) {
			res.json({
				code: 200,
				msg: "update sucessfully",
				data: updateUser
			})
		}else{
			res.json({
				code:5000,
				msg:"update failed"
			})
		}
	}
}



module.exports.getAllUser = async function (req, res) {
	let result = await userService.findAll()
	if (result) {
		res.json({
			code: 200,
			msg: "users found",
			data: result
		})
	} else (
		res.json({
			code: 5000,
			msg: "no users found"
		})
	)
}

