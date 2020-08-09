class Visitor {
    constructor(values = {}) {
        this.connectionId = values.connectionId,
            this.ipAddress = values.ipAddress,
            this.connectionDate = new Date(),
            this.joinedGame = null;
    }

    set game(game) {
        this.joinedGame = game;
        return this;
    }

    get game() {
        return this.joinedGame;
    }
}

module.exports = Visitor;