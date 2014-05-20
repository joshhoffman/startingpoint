var user = require('../controllers/user');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function(app) {
    app.get('/users', ensureLoggedIn('/login'), user.users);
    app.get('/userGet', user.userGet);
};