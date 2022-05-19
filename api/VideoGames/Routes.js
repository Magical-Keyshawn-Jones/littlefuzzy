const gameModel = require('./Model')
const gameMiddleware = require('./Middleware')
const videoGames = require('express').Router()

// Retrieves all Games
videoGames.get('/', (req, res) => {
    gameModel.getAll()
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not retrieve Video Games' })
    })
})

// Retrieves Game with that id
videoGames.get('/:id', gameMiddleware.GameIdChecker, (req, res) => {
    const { id } = req.params

    gameModel.getById(id)
    .then(results => {
            res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not retrieve Game with that id' })
    })
})

videoGames.post('/', (req, res) => {
    const { body } = req

    gameModel.create(body)
    .then(results => {
        res.status(201).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could create game post' })
    })
})

videoGames.put('/:id', (req, res) => {
    const { id } = req.params
    const { body } = req

    gameModel.update(id, body)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could update Game with that id' })
    })
})

module.exports = videoGames