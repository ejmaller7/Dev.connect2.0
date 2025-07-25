// ES5 way of importing necessary modules into a project
const express = require('express');
const router = express.Router();

// ES6 way of importing necessary modules into a project
import auth from '../../middleware/auth';
import User from '../../models/User';
import { check, validationResult } from 'express-validator/check';
import bcrypt from 'bcryptjs';
import config from '../../config';
import jwt from 'jsonwebtoken';

// @route   GET api/auth
// @desc    Get user without displaying password
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        // The -password will ensure that when you get the user, it leaves out the password
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body

    try {
        // See if user exists
        let user = await User.findOne({ email });
        
        if(!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        // Match user and password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            }
        );
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;