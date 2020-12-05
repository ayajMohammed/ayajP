// exports.createuser = async (req, res) => {
// 	const methodName = '[getAllUsers]';
// 	try {
// 		const reqData = Object.assign({}, req.body);
// 		console.log("reqdattt",reqData)
// 	}
// 	catch (error) {
		
// 	}
// };

var mongoose = require("mongoose");
var practiceSchema = require('mongoose').model('Details');



module.exports.postUser	=async function (req,res){
		reqData=req.body
		console.log(reqData,"practice")
	}

