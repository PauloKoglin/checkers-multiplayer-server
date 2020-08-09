const manager = require('../../classes/GameManager');
const Player = require('../../classes/Player');
const visitorManager = require('../../classes/VisitorManager');
const types = require('../../types');
const { bindGameReturn } = require('../utils');

const onCreateRoom = (socket) => {
    return (values = {}) => {
        const game = manager.createGame({ ownerConnectionId: socket.id });
        const player = new Player({
            connectionId: socket.id,
            name: values.playerName,
            pieceColor: types.WHITE_PIECE,
            firstPlayer: true,
            connected: true,
        })
        game.players.push(player);
        manager.addGame(game);
        const visitor = visitorManager.getVisitorByConnectionId(socket.id);
        visitor.joinedGame = game;

        socket.join(game.room);
        console.log(`Game created by ${player.name}: ${game}`);
        socket.emit('create_room', bindGameReturn(game));
    };
};

module.exports = onCreateRoom;