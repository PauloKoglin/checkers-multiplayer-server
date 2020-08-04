const manager = require('../../classes/GameManager');
const visitorManager = require('../../classes/VisitorManager');
const Player = require('../../classes/Player');
const types = require('../../types');

const onJoinGame = (socket) => {
    return (playerName, room) => {
        const game = manager.getGameByRoom(room);

        const player = new Player({
            connectionId: socket.id,
            name: playerName,
            pieceColor: types.RED_PIECE,
            connected: true,
            firstplayer: false,
        });

        game.addPlayer(player);

        visitorManager.getVisitorByConnectionId(socket.id).addJoinedGame(game);

        socket.join(game.room);
        console.log(`${player.name} has joined the room ${game.room}...`);
    };
};

module.exports = onJoinGame;