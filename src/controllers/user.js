const userService = require('../services/user.service')


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
	let login = await userService.findOne({ email: reqData.email })
	if (login) {
		let attemptCheck = await userService.loginAttempts(login)
		if (attemptCheck) {
			let result = await userService.passwordVerify(login, reqData.password)
			if (result) {
				let token = await userService.createToken(login)
				if (token) {
					res.json({
						code: 2000,
						msg: "login sucessfull",
						data: login,
						token: token
					})
				} else {
					res.json({
						code: 5000,
						msg: "login failed"
					})
				}

			} else {
				let attempts = await userService.appendAttempts(login)
			
				let x = (attempts.loginAttempts == 0) ? 3 : (attempts.loginAttempts == 1) ? 2 : (attempts.loginAttempts == 2) ? 1 :0


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





// module.exports.postUser	=async function (req,res){
// 		reqData=req.body
// 		console.log(reqData,"practice")
// 	}

