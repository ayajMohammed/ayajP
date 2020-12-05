exports.postUser = async (req, res) => {
	try {
		const reqData = Object.assign({}, req.body);
		console.log("reqdattt",reqData)
	}
	catch (error) {
		console.log("error",error)
		
	}
};





// module.exports.postUser	=async function (req,res){
// 		reqData=req.body
// 		console.log(reqData,"practice")
// 	}

