const gameModel = require('./Model')

async function GameIdChecker (req, res, next) {
    const { id } = req.params
    const game = await gameModel.getById(id)

    if (!game) {return res.status(200).json({ message: 'Game with that Id does not exist' })}

    next()
}

module.exports = {
    GameIdChecker,
}