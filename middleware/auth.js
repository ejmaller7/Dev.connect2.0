// ES5 way is the only way for this project to function
const jwt = require('jsonwebtoken');
const config = require('config');

// Continue to use ES6 way of importing modules
// import jwt from 'jsonwebtoken';
// import config from '../config';

module.exports = function(req, res, next) {
    // Get token from the header
    const token = req.header('x-auth-token');

    // Check if no token
    if(!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    };
};