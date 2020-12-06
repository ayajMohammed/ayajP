const jwt = require('jsonwebtoken');
let jwt_secrect = "javeed@gmail.com";
exports.generate = (req, res, next) => {
    const token = jwt.sign(
        {
            // exp: Math.floor(Date.now() / 1000) + 60 * jwtExpirationInterval,
            exp: Math.floor(Date.now() / 1000) + 60 * 20,
            id: req.id,
            email: req.email,
        },
        jwt_secrect
    );
    return token;
};

// exports.authVerify = (req, res, next) => {
//     const token = req.body.accessToken
//         || req.query.accessToken
//         || req.headers['x-access-token'];
//     // verifies secret and checks exp
//     jwt.verify(token, jwtSecret, async (err, decoded) => {
//         if (err) {
//             if (err.name === 'TokenExpiredError') {
//                 return customResponse.setResponse(
//                     res,
//                     false,
//                     httpStatus.UNAUTHORIZED,
//                     errorMessage.TOKEN_EXPIRED,
//                     version.v1,
//                     err.name
//                 );
//             }
//             if (err.name === 'JsonWebTokenError') {
//                 return customResponse.setResponse(
//                     res,
//                     false,
//                     httpStatus.UNAUTHORIZED,
//                     errorMessage.TOKEN_UNAUTHORIZED,
//                     version.v1,
//                     err.name
//                 );
//             }
//         }
//         else {
//             req.decoded = decoded;
//             next();
//             // const data = await redisCache.get('loginInfo', decoded.id);
//             // if (data) {
//             //     req.decoded = decoded;
//             //     next();
//             // } else {
//             //     return customResponse.setResponse(res, false, httpStatus.UNAUTHORIZED, errorMessage.TOKEN_EXPIRED, version.v1, err.name);
//             // }
//         }
//     });
// };
