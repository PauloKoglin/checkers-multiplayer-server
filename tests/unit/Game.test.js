const Game = require('../../src/classes/Game');

describe("room", () => {
    it("should return true", () => {
        const game = new Game();
        expect(game.room.length).toBe(10);
    });
});