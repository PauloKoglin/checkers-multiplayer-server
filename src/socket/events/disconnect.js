const visitorManager = require('../../classes/VisitorManager');

const onDisconnect = (socket) => {
    return () => {
        console.log("user disconnect: ".concat(socket.id));

        const visitor = visitorManager.getVisitorByConnectionId(socket.id);

        visitor.joinedGames.forEach(game => {
            game.setPlayerDisconnectedByConnectionId(socket.id);
            console.log("Player disconnected from game: ".concat(game.room));
            socket.in(game.room).emit('player_disconnect', game);
        });

        visitorManager.removeVisitorByConnectionId(socket.id);
    };
}

module.exports = onDisconnect;