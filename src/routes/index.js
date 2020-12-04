
const user = require('./user')



module.exports.initialize = function (app) {
/* User */
app.use('/user', user)

}

