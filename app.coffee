express = require 'express'
mongoose = require 'mongoose'
io = require 'socket.io'

config = require './lib/config/configure'
configRoutes = require './lib/config/configureRoutes'
socket = require './Socket/Socket'

app = express()

config.config app
configRoutes.configRoutes app

# TODO: change DB name
mongoose.connect 'mongodb://localhost/StartingPoint'

port = app.get 'port'
ret = app.listen port, () ->
    console.log 'connected on port ' + port

# Setup socket.io and do custom init
retIO = io.listen ret
socket.setIO retIO

# dummy connection
retIO.sockets.on 'connection', (socket) ->
    socket.emit 'message', { message: 'welcome to the chat' }
    socket.on 'send', (data) ->
        io.sockets.emit 'message', data