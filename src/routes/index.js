
const user = require('./user.routes')


module.exports.initialize = function (express) {
/* User */
express.use('/user', user)

}

