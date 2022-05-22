const gameModel = require('./Model')

async function gameIdChecker (req, res, next) {
    const { id } = req.params
    const game = await gameModel.getById(id)

    if (!game) {return res.status(200).json({ message: 'Game with that Id does not exist' })}

    next()
}

function gameBodyChecker (req, res, next) {
    const { game, rating, platform } = req.body 

    if (game === undefined && rating === undefined && platform === undefined){
        return res.status(400).json({ message: 'Game, rating, and platform is required' })
    } else if (game === undefined) {
        return res.status(400).json({ message: 'Game is required' })
    } else if (rating === undefined) {
        return res.status(400).json({ message: 'Rating is required' })
    } else if (platform === undefined) {
        return res.status(400).json({ message: 'Platform is required' })
    } else {
        next()
    }
}

module.exports = {
    gameIdChecker,
    gameBodyChecker,
}