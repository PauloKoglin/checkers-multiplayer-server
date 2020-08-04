const manager = require('../../classes/GameManager');
const { bindGameReturn } = require('../utils');


const onStartGame = (socket) => {
    return (room) => {
        const game = bindGameReturn(manager.getGameByRoom(room));

        socket.in(room).emit('start_game', game);
        socket.emit('start_game', game);
    };
};

module.exports = onStartGame;