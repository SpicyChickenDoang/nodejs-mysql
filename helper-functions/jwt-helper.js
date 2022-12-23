const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')

//user sign up
// user login

exports.hashPassword = (req, res, next) => {

    // const userPassword = req.body.password
    console.log(req.body);
    const salt = bcrypt.genSaltSync()
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    next()

}

exports.authToken = (req, res, next) => {
    
    const token = req.headers.authorization.split(' ')[1]
    try {
        const bomb = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)
        if (bomb) {
            req.body.access = bomb
            next()
        } else {
            res.send('errrrror')
        }
    } catch (err) {
        res.send(err.message)
    }
}

// exports.userLogIn = (req, res, next) => {

//     // take data from mysql user database
//     req.body.password
//     bcrypt.compare()

//     next()

//     res.data.userPassword == req.body.password


// }