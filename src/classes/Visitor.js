class Visitor {
    constructor(values = {}) {
        this.connectionId = values.connectionId,
            this.ipAddress = values.ipAddress,
            this.connectionDate = new Date(),
            this.joinedGames = []
    }

    addJoinedGame(game) {
        this.joinedGames.push(game);
        return this;
    }
}

module.exports = Visitor;