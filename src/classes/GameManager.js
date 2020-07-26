const Game = require('./Game');

class GameManager {

    constructor() {
        this.arrGames = [];
    }

    createGame() {
        return new Game();;
    }

    removeGame(roomId) {
        const newGames = this.arrGames.filter(game => {
            return game.room !== roomId;
        });
        this.arrGames = newGames;
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