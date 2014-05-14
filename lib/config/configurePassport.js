/**
 * Created by Josh on 3/24/14.
 */
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/User');
var passwordHash = require('password-hash');

exports.configPassport = function(passport) {
    passport.use(new LocalStrategy(
        function(username, password, done){
            User.userModel.findOne({username: username }, function(err, user) {
                if(err) {
                    console.log("Error in find");
                    return done(err);
                }
                if(!user) {
                    console.log('err usr ' + username + ' ' + password);
                    return done(null, false, {message: 'Incorrect username'});
                }
                if(passwordHash.verify(password, user.password)) {
                    console.log('err pass');
                    return done(null, user);
                }
                console.log('wow... not logged in!');
                console.log('user password ' + user.password);
                console.log(passwordHash.generate(password));
                return done(null, false, {message: 'Incorrect password'});
            });
        }
    ));
    
    passport.serializeUser(function(user, done) {
        console.log("in serialize " + user);
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        console.log("in deserialize "+ id);
        User.userModel.findById(id, function(err, user) {
            if(err) { done(err); }
            done(null, user);
        });
    });
};