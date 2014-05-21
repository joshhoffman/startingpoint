login = require '../controllers/login'
ensureLoggedIn = require 'connect-ensure-login'
ensureLoggedIn = ensureLoggedIn.ensureLoggedIn

module.exports = (app) ->
    app.post '/register', login.registerPost
    app.post '/login', login.loginPost
    
    app.get '/logout', ensureLoggedIn('/'), (req, res) ->
        console.log 'logging out'
        req.logOut()
        console.log 'logged out'
        res.redirect '/'
###
module.exports = function(app) {
    app.post('/register', login.registerPost);
    app.get('/login', login.login);
    app.get('/logout', ensureLoggedIn('/'), function logout (req, res) {
        console.log('logging out');
        req.logOut();
        console.log('logged out');
        res.redirect('/');
    });
    app.get('/register', login.register);
    app.post('/login', login.loginPost);
};
###