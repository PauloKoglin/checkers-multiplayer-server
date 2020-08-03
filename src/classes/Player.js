class Player {
    constructor(values = {}) {
        // this.connectionId = values.connectionId;
        this.name = values.name;
        this.pieceColor = values.pieceColor;
        this.firstPlayer = values.firstPlayer;
        this.connected = values.connected;
    }
}

module.exports = Player;