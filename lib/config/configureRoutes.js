var routes = require('../../routes');
var user = require('../../routes/user');
var login = require('../../routes/login');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

exports.configRoutes = function(app) {
    /*app.post('/login', passport.authenticate('local', { successReturnToOrRedirect: '/',
                                                        failureRedirect: 'authentication/login'}));*/

    // GETS
    require('../../routes/index')(app);
    require('../../routes/login')(app);
    require('../../routes/user')(app);
};