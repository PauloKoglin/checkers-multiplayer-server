const routes = require("express").Router();
const manager = require('../../classes/GameManager');
const Player = require('../../classes/Player');
const types = require('../../types');

const add = (req, res) => {
    setTimeout(() => {
        try {
            const game = manager.createGame();

            game.player1 = new Player(req.body.playerName, types.WHITE_PIECE);
            manager.addGame(game);

            res.status(200).send(game);
        } catch (error) {
            res.status(401).send(error)
        }
    }, 5000);

};

const update = (req, res) => {
    try {
        const game = manager.getGameByRoom(req.params.room);

        if (game) {
            game.player2 = new Player(req.body.playerName, types.RED_PIECE);
            res.status(200).send(game)
        } else
            res.status(201).send();
    } catch (error) {
        res.status(401).send(error)
    }
};


const get = (req, res) => {
    try {
        const game = manager.getGameByRoom(req.params.room);

        if (game)
            res.status(200).send(game)
        else
            res.status(201).send();
    } catch (error) {
        res.status(400).send(error)
    }
};

const getAll = (req, res) => {
    try {
        const games = manager.games;
        res.status(200).send(games);
    } catch (error) {
        res.status(400).send(error)
    }
};

routes.post("/", add);
routes.post("/:room", update);

routes.get("/", getAll);
routes.get("/:room", get);


module.exports = routes;