const socket = require('socket.io');
const manager = require('../classes/GameManager');
const Player = require('../classes/Player');
const types = require('../types');

module.exports = createSocket;

function createSocket(server) {
    const io = socket.listen(server)

    io.on('connection', (socket) => {

        console.log("user connected: ".concat(socket.id));

        socket.on('disconnect', () => {
            console.log("user disconnect: ".concat(socket.id));
        });

        socket.on('create_room', (game) => {
            socket.join(game.room);
            console.log(`Room ${game.room} has created by ${game.player1.name}...`);
        });

        socket.on('start_game', (room) => {
            const game = manager.getGameByRoom(room);
            socket.in(room).emit('start_game', game);
            socket.emit('start_game', game);
        });

        socket.on('join_room', (playerName, room) => {
            const game = manager.getGameByRoom(room);
            game.player2 = new Player(playerName, types.RED_PIECE);
            console.log(`${game.player1.name} has joined the room ${game.room}...`);

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