const routes = require("express").Router();
const room = require("./api/room");

routes.use("/room", room);

module.exports = routes;