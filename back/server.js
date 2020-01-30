/* Initialization */
// Express
const express = require('express')
const app = express()
// Body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
// Port
const port = 5005
// Config files (mysql)
const connect = require('./config')

/* Routes */
// Shows
app.use('/shows', require('./routes/shows'))
// Tickets
app.use('/tickets', require('./routes/tickets'))

// Listen
app.listen(port, error => {
    if (error) {
        throw new Error('Sorry, an internal error has occureds')
    }
    else {
        console.log(`Server listening on port ${port}`)
    }
})