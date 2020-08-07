const manager = require('../../classes/GameManager');
const engine = require('../../game-engine');

const onSelectSquare = (socket) => {
    return ({ room, clickedSquare }) => {
        const game = manager.getGameByRoom(room);

        if (!clickedSquare.isSelected) {
            game.squares[clickedSquare.index].isSelected = true;
            game.selectedSquareIndex = clickedSquare.index;
            game.squares = engine.setSquaresToPossibleMove(game.squares, clickedSquare.piece.possibleMoves, true);
        } else {
            game.squares[clickedSquare.index].isSelected = false;
            game.selectedSquareIndex = null;
            game.squares = engine.setSquaresToPossibleMove(game.squares, clickedSquare.piece.possibleMoves, false);
        }

        const payload = {
            squares: game.squares,
            selectedSquareIndex: game.selectedSquareIndex
        };

        socket.emit('select_square', payload);
        socket.in(room).emit('select_square', payload);
    };
};

module.exports = onSelectSquare;