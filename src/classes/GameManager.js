const Game = require('./Game');

class GameManager {

    constructor() {
        this.arrGames = [];
    }

    createGame(params) {
        console.log(params);
        return new Game(params);
    }

    removeGameByRoomId(roomId) {
        const newGames = this.arrGames.filter(game => {
            return game.room !== roomId;
        });
        this.arrGames = newGames;
        return this;
    }

    get games() {
        return this.arrGames;
    }

    getGameByRoom(roomId) {
        return this.arrGames.find(game => game.room === roomId);
    }

    addGame(game) {
        this.arrGames.push(game);
    }
}

const manager = new GameManager();

module.exports = manager;