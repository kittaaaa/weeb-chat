const express = require('express');
const { registerUser, authUser } = require('../controller/userController');

const router = express.Router();


// router.route('/login').post(authUser);
router.route('/').post(registerUser);

module.exports = router;