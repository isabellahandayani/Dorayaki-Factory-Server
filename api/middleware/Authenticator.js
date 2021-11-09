import {JWT_SECRET} from '../../utils/Constant';

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.include('Bearer') && req.headers.authorization.split(' ')[1];
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