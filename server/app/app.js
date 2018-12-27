const express = require('express')
const path = require('path')

const APP_CONSTANTS = require('../../app.constants')

// https://github.com/expressjs/express/blob/master/lib/express.js#L38
let app = express()

app.use(express.static(APP_CONSTANTS.CLIENT_PATH))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(APP_CONSTANTS.CLIENT_PATH, 'index.html'))
})

module.exports = {
  app
}