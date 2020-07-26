
const config = require('config');
const port = config.get('port');

const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require('cors');

// Setup express
const express = require("express");
const api = express();

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use(helmet());
api.use(cors());

// Setup routes
const routes = require('./src/routes');
api.use("/api", routes);

// Setup the web-socket
const server = require('http').Server(api);
require('./src/socket')(server);

// Start the server
server.listen(process.env.PORT || port, () => {
    console.log(`Served at port ${port}.`)
});