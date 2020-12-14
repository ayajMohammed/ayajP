// const Joi = require('joi')
// // import * as Joi from 'joi'

// const register = Joi.object({
//     name: Joi.string().required(),
//     email:Joi.string().required(),
//     mobile:Joi.number().required()
//   })

//   module.exports={
//     register
//   }

const Joi = require('joi');

module.exports = {
	// POST /v1/auth/register
	register: {
		body: Joi.object().keys({
			name: Joi.string().required(),
            email: Joi.string().email().required(),
            mobile:Joi.number().required()
		
		})
	},

	
};




