
const user = require('./user')

var controllers=require('../controllers/user')

module.exports.initialize = function (express) {
/* User */
express.use('/user', user),
express.post('/postUser',controllers.postUser)

}

