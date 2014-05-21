(function() {
  var app, config, configRoutes, express, mongoose, port, socket;

  express = require('express');

  mongoose = require('mongoose');

  config = require('./lib/config/configure');

  configRoutes = require('./lib/config/configureRoutes');

  socket = require('./Socket/Socket');

  app = express();

  config.config(app);

  configRoutes.configRoutes(app);

  mongoose.connect('mongodb://localhost/StartingPoint');

  port = app.get('port');

  app.listen(port, function() {
    return console.log('connected on port ' + port);
  });

}).call(this);
