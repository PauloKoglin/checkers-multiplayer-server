const random = require('hash-generator');

class Game {

    constructor() {
        this.room = random(10);
        this.players = [];
    };

    getFirstPlayer() {
        return this.players[0];
    };

    getSecondPlayer() {
        return this.players[1];
    };

    addPlayer(player) {
        if (this.players.length === 2)
            throw new Error('The game can have only two players.');

        this.players.push(player);
        return this;
    }

    setPlayerDisconnectedByConnectionId(connectionId) {
        this.players = this.players.map(player => {
            if (player.connectionId === connectionId)
                player.connected = false

            return player;
        });
        return this;
    };
};

module.exports = Game;