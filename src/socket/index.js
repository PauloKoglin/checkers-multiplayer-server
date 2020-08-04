const socket = require('socket.io');
const Visitor = require('../classes/Visitor');
const visitorManager = require('../classes/VisitorManager');
const types = require('../types');

const onDisconnect = require('./events/disconnect');
const onCreateRoom = require('./events/createRoom');
const onStartGame = require('./events/startGame');
const onJoinRoom = require('./events/joinRoom');
const onReconnectRoom = require('./events/reconnectRoom');
const onMovePieceTo = require('./events/movePieceTo');
const onSelectSquare = require('./events/selectSquare');

module.exports = createSocket;

const onConnection = (socket) => {
    console.log("user connected: ".concat(socket.id));

    const visitor = new Visitor({
        connectionId: socket.id,
        ipAddress: socket.handshake.address,
    });

    visitorManager.addVisitor(visitor);

    socket.on(types.SOCKET_DISCONNECT, onDisconnect(socket));
    socket.on(types.SOCKET_CREATE_ROOM, onCreateRoom(socket));
    socket.on(types.SOCKET_START_GAME, onStartGame(socket));
    socket.on(types.SOCKET_JOIN_ROOM, onJoinRoom(socket));
    socket.on(types.SOCKET_RECONNECT_ROOM, onReconnectRoom(socket));
    socket.on(types.SOCKET_MOVE_PIECE_TO, onMovePieceTo(socket));
    socket.on(types.SOCKET_SELECT_SQUARE, onSelectSquare(socket));
};

function createSocket(server) {
    const io = socket.listen(server)
    io.on(types.SOCKET_CONNECTION, onConnection);
};