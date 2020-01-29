/* Initialization */
// Express
const express = require('express')
const router = express.Router()
// Mysql
const connect = require('../config')

/* Routes */
router.get('/', (req, res) => {
    connect.query('SELECT * FROM shows', (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.status(200).json(results)
        }
    })
})

module.exports = router