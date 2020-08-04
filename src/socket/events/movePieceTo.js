const onMovePieceTo = (socket) => {
    return (room, index) => {
        socket.emit('move_piece_to', index);
        socket.in(room).emit('move_piece_to', index);
    };
};

module.exports = onMovePieceTo;
