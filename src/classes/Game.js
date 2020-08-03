const random = require('hash-generator');

class Game {

    constructor() {
        this.room = random(10);
        this.players = [];
        // this.player1 = null;
        // this.player2 = null;
    }

    firstPlayer() { return this.players[0]; };
    secondPlayer() { return this.players[1]; };

    setPlayerDisconnectedFromGame(connectionId) {
        this.players = this.players.map(player => {
            if (player.connectionId === connectionId)
                player.connected = false

            return player;
        })
    }
}

module.exports = Game;