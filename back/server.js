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
