const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const auth = require("../utils/auth");

router.route('/create').post(userController.createUser);
router.route('/login').post(userController.loginUser);
router.route('/getAllUser').post(auth.authVerify,userController.getAllUser);


module.exports = router;