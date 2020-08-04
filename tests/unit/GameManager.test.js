const gameManager = require('../../src/classes/GameManager');
const Game = require('../../src/classes/Game');

describe("GameManager.createGame", () => {
    it("should return a game", () => {
        const game = gameManager.createGame();

        expect(game).toBeDefined();
        expect(game).toBeInstanceOf(Game);
    });
});

describe("removeGame_WithOneGames", () => {

    it("should return return empty array", () => {
        const game = gameManager.createGame();
        gameManager.removeGame(game.room);

        expect(gameManager.games.length).toEqual(0);
    });
});