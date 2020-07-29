const socket = require('socket.io');
const manager = require('../classes/GameManager');
const Player = require('../classes/Player');
const types = require('../types');

module.exports = createSocket;

const connectedPlayers = [];

function bindGameReturn(game) {
    return {
        room: game.room,
        firstPlayer: game.players[0],
        secondPlayer: game.players[1],
    }
}

function createSocket(server) {
    const io = socket.listen(server)

    io.on('connection', (socket) => {
        console.log("user connected: ".concat(socket.id));

        socket.on('disconnect', () => {
            console.log("user disconnect: ".concat(socket.id));

            let game = manager.games.find(game => {
                return game.players.map(player => {
                    if (player.connectionId === socket.id)
                        player.connected = false;

                    return player;
                });
            });

            if (game) {
                console.log("game is paused: ".concat(game.room));
                socket.in(game.room).emit('player_disconnect', game);
            }
        });

        socket.on('create_room', (values = {}) => {
            const game = manager.createGame();
            const player = new Player({
                connectionId: socket.id,
                name: values.playerName,
                pieceColor: types.WHITE_PIECE,
                firstPlayer: true,
                connected: true,
            })
            game.players.push(player);
            manager.addGame(game);
            console.log(game);

            socket.join(game.room);
            console.log(`Room ${game.room} has created by ${player.name}...`);
            socket.emit('create_room', bindGameReturn(game));
        });

        socket.on('start_game', (room) => {
            const game = bindGameReturn(manager.getGameByRoom(room));

            socket.in(room).emit('start_game', game);
            socket.emit('start_game', game);
        });

        socket.on('join_room', (playerName, room) => {
            const game = manager.getGameByRoom(room);
            const player = new Player({
                connectionId: socket.id,
                name: playerName,
                pieceColor: types.RED_PIECE,
                connected: true,
                firstplayer: false,
            });

            game.players.push(player);
            console.log(`${player.name} has joined the room ${game.room}...`);

            socket.join(game.room);
        });

        socket.on('move_piece_to', (room, index) => {
            socket.emit('move_piece_to', index);
            socket.in(room).emit('move_piece_to', index);
        });

        socket.on('select_square', (room, square) => {
            socket.emit('select_square', square);
            socket.in(room).emit('select_square', square);
        });
    });

}