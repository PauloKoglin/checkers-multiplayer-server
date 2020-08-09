const routes = require("express").Router();
const manager = require('../../classes/GameManager');
const httpStatus = require('http-status-codes');
const Player = require('../../classes/Player');
const types = require('../../types');

const REQUEST_ERROR_MESSAGE = 'Something went wrong in our server, sorry for that!';

function getAll(_, response) {
    try {
        const games = manager.games;
        response.status(httpStatus.OK).send(games);
    } catch (error) {
        console.log(error);
        response.status(httpStatus.INTERNAL_SERVER_ERROR).send(REQUEST_ERROR_MESSAGE);
    }
};

function getRoom(request, response) {
    try {
        const game = manager.getGameByRoom(request.params.room);

        if (game)
            response.status(httpStatus.OK).send(game)
        else
            response.status(httpStatus.NO_CONTENT).send();
    } catch (error) {
        console.log(error);
        response.status(httpStatus.INTERNAL_SERVER_ERROR).send(REQUEST_ERROR_MESSAGE);
    }
};

function deleteRoom(request, response) {
    try {
        const roomId = request.params.room;
        manager.removeGameByRoomId(roomId);

        response.status(httpStatus.OK).send();
    } catch (error) {
        console.log(error);
        response.status(httpStatus.INTERNAL_SERVER_ERROR).send(REQUEST_ERROR_MESSAGE);
    }
}

routes.get("/", getAll);
routes.get("/:room", getRoom);

routes.delete("/:room", deleteRoom);


module.exports = routes;