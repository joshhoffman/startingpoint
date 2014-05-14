var login = require('../controllers/login');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

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