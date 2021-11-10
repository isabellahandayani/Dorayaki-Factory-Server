const jwt = require('jsonwebtoken');
JWT_SECRET = require('../../utils/Constant');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Function} next 
 * @returns 
 */
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.includes('Bearer') && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'No token provided.'
        });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'Invalid token.'
            });
        }
        req.user = decoded;
        next();
    });
}

module.exports = verifyToken;