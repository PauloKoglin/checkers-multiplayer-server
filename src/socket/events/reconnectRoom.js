const manager = require('../../classes/GameManager');

const onReconnectRoom = (socket) => {
    return (values) => {
        const game = manager.getGameByRoom(values.room);
        game.players.map(player => {
            if (player.name === values.name)
                player.connected = true;

            return player;
        });
        socket.join(game.room);
        console.log(`${values.name} reconnect the room ${game.room}...`);

        socket.emit('reconnect_room');
        socket.in(room).emit('reconnect_room');
    };
};

module.exports = onReconnectRoom;
