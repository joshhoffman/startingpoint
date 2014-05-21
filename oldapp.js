
/**
 * Module dependencies.
 */
var express = require('express');
var mongoose = require('mongoose');

var config = require('./lib/config/configure');
var configRoutes = require('./lib/config/configureRoutes');

var socket = require('./Socket/Socket');

var app = express();

// all environments
config.config(app);
configRoutes.configRoutes(app);

// TODO: Change DB name
mongoose.connect('mongodb://localhost/StartingPoint');

// uncomment this block to start up with node instead of socket.io
/*http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});*/

var port = app.listen(app.get('port'), function() {
    console.log('connected on port ' + app.get('port'));
});
//var port = app.get('port');

/*var io = require('socket.io').listen(port, function() {
    console.log('Express server listening on port ' + app.get('port'));
});

socket.setIO(io);

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});*/