(function() {
  var app, express, http, testf, tests;

  express = require('express');

  app = express();

  http = require('http');

  testf = function() {
    return console.log('test ' + app.get('port'));
  };

  tests = function(req, res) {
    return res.end('test');
  };

  http.createServer(function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    return res.end('Hello from coffeescript');
  }).listen(3000, testf);

}).call(this);
