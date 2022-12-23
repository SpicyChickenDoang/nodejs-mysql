const express = require('express')
const router = express.Router()
const userController = require('../controller/user.js')
const {hashPassword, authToken} = require('../helper-functions/jwt-helper')
const bbom = userController.createUser

function logger(req, res, next){
    console.log(req.url);
    next()
}

router.use(logger)

router.post('/user/new', hashPassword, userController.createUser)
router.post('/login', userController.loginUser)
router.post('/logout', authToken, userController.logoutUser)
router.post('/getAP', authToken, userController.getAllPerson)
router.get('/redirect', userController.redirect)




module.exports = router;


