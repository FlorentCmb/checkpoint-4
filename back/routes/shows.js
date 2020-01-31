/* Initialization */
// Express
const express = require('express')
const router = express.Router()
// Mysql
const connect = require('../config')

/* Routes */
// Get the shows
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
// Get a show
router.get('/:id', (req, res) => {
    const id = req.params.id
    connect.query('SELECT * FROM shows WHERE id=?', id, (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.status(200).json(results)
        }
    })
})
// Add a show
router.post('/add', (req, res) => {
    const data = req.body
    
    // Remove tickets data from the req.body ?
    console.log(data)
    connect.query('INSERT INTO shows SET ?', data, (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.status(200).send('Show successfully added.')
        }
    })
})

module.exports = router