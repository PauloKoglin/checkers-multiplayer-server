const onSelectSquare = (socket) => {
    return (room, square) => {
        socket.emit('select_square', square);
        socket.in(room).emit('select_square', square);
    };
};

module.exports = onSelectSquare;