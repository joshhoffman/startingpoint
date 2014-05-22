user = require '../controllers/user'
ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

module.exports = (app) ->
    app.get '/users', ensureLoggedIn('/'), user.users
    app.get '/userGet', ensureLoggedIn('/'), user.userGet