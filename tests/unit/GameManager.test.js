const GameManager = require('../../src/classes/GameManager');
const Game = require('../../src/classes/Game');

describe("GameManager.createGame", () => {
    it("should return a game", () => {
        const gamemanager = new GameManager();
        const game = gamemanager.createGame();

        expect(game).toBeDefined();
        expect(game).toBeInstanceOf(Game);
    });
});

describe("removeGame_WithOneGames", () => {

    it("should return return empty array", () => {
        const gameManager = new GameManager();
        const game = gameManager.createGame();
        gameManager.removeGame(game.room);

        expect(gameManager.games.length).toEqual(0);
    });
});

// describe("removeGame_WithTwoGames", () => {
//     it("should return return only game2", () => {
//         const gameManager = new GameManager();
//         const game = gameManager.createGame();
//         const game2 = gameManager.createGame();

//         gameManager.removeGame(game.room);

//         expect(gameManager.games.includes(game2)).toBeTruthy();
//         expect(gameManager.games.length).toEqual(1);
//     });
// });