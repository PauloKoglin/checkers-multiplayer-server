function bindGameReturn(game) {
    return {
        room: game.room,
        firstPlayer: game.getFirstPlayer(),
        secondPlayer: game.getSecondPlayer(),
    }
}

module.exports = { bindGameReturn };