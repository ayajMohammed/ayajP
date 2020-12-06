const jwt = require('jsonwebtoken');
let jwt_secrect = "bA2xcjpf8y5aSUFsNB2qN5yymUBSs6es3qHoFpGkec75RCeBb8cpKauGefw5qy4";
exports.generate = (req, res, next) => {
    const token = jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 20,
            id: req.id,
            email: req.email,
        },
        jwt_secrect
    );
    return token;
};

exports.authVerify = (req, res, next) => {
    const token = req.body.accessToken
        || req.query.accessToken
        || req.headers['x-access-token'];
    // verifies secret and checks exp
    jwt.verify(token, jwt_secrect, async (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                res.json({
                    code: 408,
                    msg: "token_expired"
                })
            }
            if (err.name === 'JsonWebTokenError') {
                res.json({
                    code: 408,
                    msg: "json_webToken_error"
                })
            }
        }
        else {
            req.decoded = decoded;
            next();
            // const data = await redisCache.get('loginInfo', decoded.id);
            // if (data) {
            //     req.decoded = decoded;
            //     next();
            // } else {
            //     return customResponse.setResponse(res, false, httpStatus.UNAUTHORIZED, errorMessage.TOKEN_EXPIRED, version.v1, err.name);
            // }
        }
    });
};
