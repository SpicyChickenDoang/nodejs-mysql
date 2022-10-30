const express = require('express');
const router = express.Router();
const userFunction = require('./user.js')


router.post('/user/new', userFunction.createUser)
router.post('/login', userFunction.loginUser)

module.exports = router;


