const http = require('http');

function server(api) {
    return http.Server(api);
}

module.exports = server;