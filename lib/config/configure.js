var express = require('express');
var http = require('http');
var path = require('path');
var passport = require('passport');
var configPassport = require('./configurePassport');
var favicon = require('static-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var expressJson = require('express-json');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var bodyParser = require('body-parser');

exports.config = function (app) {
    configPassport.configPassport(passport);
    
    //var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
    //app.engine('handlebars', handlebars.engine);
    //app.set('view engine', 'handlebars');
    
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../../views'));
    app.use(favicon());
    app.use(morgan('dev'));
    app.use(expressJson());
    app.use(bodyParser());
    //app.use(express.urlencoded());
    app.use(methodOverride());
    app.use(cookieParser('your secret here'));
    app.use(session());
    app.use(passport.initialize());
    app.use(passport.session());
    //app.use(app.router);
    app.use(require('less-middleware')(path.join(__dirname, '../../public')));
    app.use(express.static(path.join(__dirname, '../../public')));
    
    // development only
    if ('development' == app.get('env')) {
      app.use(errorHandler());
    }
};