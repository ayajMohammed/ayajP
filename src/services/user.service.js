const mongoose = require("mongoose");
const practiceSchema = require('mongoose').model('Details');



// exports.fetchByUserId = async (query) => {
// 	const methodName = '[fetchByUserId]';
// 	try {
// 		const criteria = {
// 			where: {
// 				uuid: query.id
// 			}
// 		};
// 		return await User.findOne(criteria);
// 	}
// 	catch (error) {
// 		logger.error(model, methodName, error);
// 		return false;
// 	}
// };