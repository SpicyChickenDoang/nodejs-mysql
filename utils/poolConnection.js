const {poolConfig} = require('./config')
const mysql = require('mysql2')

const pool = mysql.createPool(poolConfig)

pool.query("SELECT * FROM user_data;", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    console.log(data);
});