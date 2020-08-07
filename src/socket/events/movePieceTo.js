const manager = require('../../classes/GameManager');
const engine = require('../../game-engine');

const onMovePieceTo = (socket) => {
    return ({ room, selectedIndex, index }) => {
        const game = manager.getGameByRoom(room);
        const moveResult = engine.movePieceTo(game, selectedIndex, index);

        game.squares = moveResult.squares;
        game.capturedRedPieces = moveResult.capturedRedPieces;
        game.capturedYellowPieces = moveResult.capturedYellowPieces;
        game.isWhiteNext = moveResult.isWhiteNext;

        const payload = moveResult;

        socket.emit('move_piece_to', payload);
        socket.in(room).emit('move_piece_to', payload);
    };
};

module.exports = onMovePieceTo;
