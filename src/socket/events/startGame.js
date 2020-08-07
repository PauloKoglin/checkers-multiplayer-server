const manager = require('../../classes/GameManager');
const { bindGameReturn } = require('../utils');
const engine = require('../../game-engine');


const onStartGame = (socket) => {
    return (room) => {
        const game = manager.getGameByRoom(room);
        const squares = engine.startGame();
        game.squares = squares;

        const payload = {
            game: bindGameReturn(game),
            squares
        };

        socket.in(room).emit('start_game', payload);
        socket.emit('start_game', payload);
    };
};

module.exports = onStartGame;