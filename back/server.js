/* Initialization */
// Express
const express = require('express')
const cors = require('cors')
const app = express()
// Body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
// CORS settings
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }
// Port
const port = 5005
// Config files (mysql)
const connect = require('./config')

// CORS
app.use(cors(corsOptions))

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