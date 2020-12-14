
const express = require('express');
const validate = require('express-validation');

const router = express.Router();
const userController = require('../controllers/user.controller')
const auth = require("../utils/auth");
const validations=require('../validations/validations')
// import validations from '../validations/validations'

router.route('/create').post(validate(validations.register) , userController.createUser);
router.route('/login').post(userController.loginUser);
router.route('/searchUser').post(auth.authVerify,userController.searchUser);
router.route('/getAllUser').post(auth.authVerify,userController.getAllUser);
router.route('/getAllUser').post(auth.authVerify,userController.getAllUser);
router.route('/update/:id').post(auth.authVerify,userController.update);




module.exports = router;