const Game = require('../../src/classes/Game');
const Player = require('../../src/classes/Player');

describe("Game", () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    it("should have a 10-Algarism room", () => {
        expect(game.room.length).toBe(10);
    });

    it("should have one player only", () => {
        const player = new Player();
        game.addPlayer(player);
        expect(game.players.length).toBe(1);
    });

    it("should have two players", () => {
        game.addPlayer(new Player()).addPlayer(new Player());
        expect(game.players.length).toBe(2);
    });

    it("should not permit adding 3 players and raise a throw", () => {
        expect(() => {
            game.addPlayer(new Player())
                .addPlayer(new Player())
                .addPlayer(new Player());
        }).toThrow();
    });

    it("should return first player", () => {
        const player = new Player({ name: 'Test' });
        game.addPlayer(player);
        expect(game.getFirstPlayer()).toMatchObject(player);
    });

    it("should return second player", () => {
        const player1 = new Player({ name: 'Test1' });
        const player2 = new Player({ name: 'Test2' });
        game.addPlayer(player1).addPlayer(player2);
        expect(game.getSecondPlayer()).toMatchObject(player2);
    });

});