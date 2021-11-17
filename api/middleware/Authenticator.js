const jwt = require('jsonwebtoken');
const UserServices = require('../services/UserServices');
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

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'Invalid token.'
            });
        }
        
        if (decoded.user) {
            admin = await UserServices.findAdminById(decoded.user.id);

            if (admin.email && admin.email === decoded.user.email) {
                req.user = decoded.user;
                next();
            } else {
                return res.status(401).json({
                    message: 'Invalid token.'
                });
            }

        } else {
            return res.status(401).json({
                message: 'Invalid token.'
            });
        }
    });
}

module.exports = verifyToken;