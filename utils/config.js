require('dotenv').config()

let config = ({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
});

let poolConfig = ({
    connectionLimit: 100,
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    debug: false
});

module.exports = {config, poolConfig};