/**
 * Created by personberg on 2016-03-17.
 */
var express = require('express'),
    http = require('http'),
    io = require('socket.io');

var port = 3000;
var app = express();
require('./app/routes')(app);
/*
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
    });
*/

// Setup port
var port = process.env.PORT || 3000;

// Static files
app.use(express.static(__dirname + '/public'));

// Listing on port
var socket = io.listen(http.createServer(app).listen(port));
console.log('Started server on http://localhost:' + port + '/');

// User connects to server
socket.sockets.on('connection', function (client) {
    var connected = true;
    console.log(client.id);

    client.broadcast.emit('join', JSON.stringify('A new user joined the chat'));

    client.on('message', function (data) {
        client.broadcast.emit('message', data);
    });

    client.on('writing', function (data) {
        client.broadcast.emit('writing', null);
    });

    client.on('disconnect', function () {
        connected = false;
        client.broadcast.emit('join', JSON.stringify('A user left the chat'));
    });

    client.on('reconnect', function () {
        console.log('my connection has been restored!');
    });
});