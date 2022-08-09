const express = require('express')
const videoGames = require('./videoGames/Routes')

const server = express()

server.use(express.json())

server.use('/api/videoGames', videoGames)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'There was an error performing the operation' })
})


module.exports = server