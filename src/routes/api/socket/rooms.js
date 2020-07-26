const routes = require("express").Router();
const types = require('../../types');
const socket = require('../../../socket');

const getAll = (req, res) => {
    try {
        const games = socket.
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