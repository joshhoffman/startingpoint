express = require 'express'
path = require 'path'
passport = require 'passport'
configPassport = require './configurePassport'
favicon = require 'static-favicon'
morgan = require 'morgan'
cookieParser = require 'cookie-parser'
session = require 'express-session'
expressJson = require 'express-json'
methodOverride = require 'method-override'
errorHandler = require 'errorhandler'
bodyParser = require 'body-parser'

exports.config = (app) ->
    configPassport.configPassport passport

    ###
    //var handlebars = require('express3-handlebars').
            create({defaultLayout:'main'});
    //app.engine('handlebars', handlebars.engine);
    //app.set('view engine', 'handlebars');
    ###

    app.set 'port', process.env.PORT || 3000
    app.set 'views', path.join(__dirname, '../../views')
    app.use favicon()
    app.use morgan('dev')
    app.use expressJson()
    app.use bodyParser()
    app.use methodOverride()
    app.use cookieParser('totes secret')
    app.use session()
    app.use passport.initialize()
    app.use passport.session()

    app.use express.static(path.join(__dirname, '../../public'))

    app.use errorHandler() if 'development' is app.get('env')