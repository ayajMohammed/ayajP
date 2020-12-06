const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.route('/create').post(userController.createUser);
router.route('/login').post(userController.loginUser);


module.exports = router;