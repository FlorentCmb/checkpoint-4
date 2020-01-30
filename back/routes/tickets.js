/* Initialization */
// Express
const express = require('express')
const router = express.Router()
// Mysql
const connect = require('../config')

/* Routes */
// Add a ticket
router.post('/:show_id/add', (req, res) => {
    const id = req.params.show_id
    const data = req.body
    // Get the current number of available tickets
    connect.query('SELECT nb_available_tickets FROM shows WHERE shows.id=?', id, (err, result) => {
        if (err) {
            res.sendStatus(500)
        }
        else {
            // If there's a positive number of remaining available tickets
            if (result[0].nb_available_tickets > 0) {
                const userData = {
                    id_show: id,
                    id_user: 1
                }
                connect.query('INSERT INTO tickets SET ?', userData, (err2, result2) => {
                    if (err2) {
                        res.sendStatus(500)
                    }
                    else {
                        // Decrement the number of available
                        connect.query('UPDATE shows SET nb_available_tickets=nb_available_tickets-1 WHERE shows.id=?', id, (err3, result3) => {
                            if (err3) {
                                res.sendStatus(500)
                            }
                            else {
                                res.status(200).send('Ticket successfully added.')
                            }
                        })
                    }
                })
            }
        }
    })
})

module.exports = router