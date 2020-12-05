const userService = require('../services/user.service')


exports.createUser = async (req, res) => {
	try {
		const reqData = Object.assign({}, req.body);
		const check = await userService.findOne({email:reqData.email});
		if(check){
			res.json({
				code:404,
				msg:`${check.email} already exist`
			})

		}else{
			const checkMobile=await userService.findOne({mobile:reqData.mobile})
			if(checkMobile){
				res.json({
					code:404,
					msg:`${checkMobile.mobile} already exist`
				})
			}else{
				let result=await userService.createService(reqData)
				if(result){
					res.json({
						code:2000,
						msg:"user registered sucessfully",
						data:result
					})
				}else{
					res.json({
						code:5000,
						msg:"user registered failed",
					})
				}

			}

	
		
		}
	}
	catch (error) {
		console.log("error",error)
		
	}
};





// module.exports.postUser	=async function (req,res){
// 		reqData=req.body
// 		console.log(reqData,"practice")
// 	}

