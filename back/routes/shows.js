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
// Add a show
router.post('/', (req, res) => {
    const data = req.body
    // Remove tickets data from the req.body ?
    const showData = data.split(5, 1)
    const ticketData = data[5]
    connect.query('INSERT INTO shows SET ?', showData, (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            // Add tickets query here
            for (let i = 0; i < data.nb_places; i++) {
                connect.query('SELECT MAX(shows.id) AS last_id FROM shows; INSERT INTO tickets SET (price, id_show, id_user) VALUES (?, last_id, NULL)', ticketData, (err2, results2) => {
                    if (err2) {
                        res.sendStatus(500)
                    }
                    else {
                        res.status(200).send('Show and its tickets has been added.')
                    }
                })
            }
        }
    })
})
// Update a show
router.put('/:id/modify', (req, res) => {
    const data = req.body
    const id = req.params.id
    connect.query('UPDATE shows SET ? WHERE shows.id=?', [data, id], (err, results) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            res.status(200).send(`The show's changes (id: ${id}) has been successfully applied.`)
        }
    })
})


module.exports = router