
const user = require('./user')


module.exports.initialize = function (express) {
/* User */
express.use('/user', user)

}

