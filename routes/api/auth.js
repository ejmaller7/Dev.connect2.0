// ES5 way of importing necessary modules into a project
const express = require('express');
const router = express.Router();

// ES6 way of importing necessary modules into a project
import auth from '../../middleware/auth';
import User from '../../models/User';

// @route   GET api/auth
// @desc    Test route
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

module.exports = router;