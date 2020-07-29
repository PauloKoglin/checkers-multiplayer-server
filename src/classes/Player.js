class Player {
    constructor(values = {}) {
        this.connectionId = values.connectionId;
        this.name = values.name;
        this.pieceColor = values.pieceColor;
        this.firstPlayer = values.firstPlayer;
        this.connected = values.connected;
    }

    // set id(id) {
    //     this._id = id;
    // }

    // set name(value) {
    //     this._name = value;
    // }

    // set pieceColor(value) {
    //     this._pieceColor = value;
    // }

    // set connected(value) {
    //     this._connected = value;
    // }

    // get id() {
    //     return this._id;
    // }

    // get name() {
    //     return this._name;
    // }

    // get pieceColor() {
    //     return this._pieceColor;
    // }

    // get connected() {
    //     return this._connected;
    // }
}

module.exports = Player;