/* Initialization */
// Mysql
const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '11235813',
    database: 'WTFJS'
})

module.exports = connect