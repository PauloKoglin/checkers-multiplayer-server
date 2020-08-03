class Visitor {
    constructor(values = {}) {
        this.connectionId = values.connectionId,
            this.ipAddress = values.ipAddress,
            this.connectionDate = new Date(),
            this.joinedGames = []
    }
}

module.exports = Visitor;