const routes = require("express").Router();
const rooms = require("./api/rooms");

routes.use("/rooms", rooms);

module.exports = routes;