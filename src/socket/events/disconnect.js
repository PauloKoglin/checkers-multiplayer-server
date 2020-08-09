const visitorManager = require('../../classes/VisitorManager');
const gameManager = require('../../classes/GameManager');

const onDisconnect = (socket) => {
    return () => {
        console.log("user disconnect: ".concat(socket.id));
        const visitorConnectionId = socket.id;
        const visitor = visitorManager.getVisitorByConnectionId(visitorConnectionId);

        if (visitor) {
            if (visitor.joinedGame && visitor.joinedGame.ownerConnectionId === visitorConnectionId) {
                gameManager.removeGameByRoomId(visitor.joinedGame.room);
            } else {
                if (visitor.joinedGame) {
                    visitor.joinedGame.setPlayerDisconnectedByConnectionId(visitorConnectionId);
                    socket.in(visitor.joinedGame.room).emit('player_disconnect', visitor.joinedGame);
                }
            }

            visitorManager.removeVisitorByConnectionId(visitorConnectionId);
        }
    };
};

module.exports = onDisconnect;