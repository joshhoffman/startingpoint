(function() {
  var hashPassword, passport, sify, user;

  user = require('../models/User');

  hashPassword = require('password-hash');

  passport = require('passport');

  sify = function(s) {
    return JSON.stringify(s);
  };

  exports.loginPost = function(req, res, next) {
    return passport.authenticate('local', function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect('/login');
      }
      return req.logIn(user, function(err) {
        console.log('in login');
        if (err) {
          return next(err);
        }
        console.log('about to redirect');
        return next(null, user);
      });
    })(req, res, next);
  };

  exports.registerPost = function(req, res) {
    var confirmpassword, password;
    console.log('register');
    password = req.body.password;
    confirmpassword = req.body.confirmpassword;
    return user.userModel.findOne({
      username: req.body.username
    }, function(err, foundUser) {
      var usr;
      if (!foundUser && !err && password === confirmpassword) {
        usr = new user.userModel({
          'username': req.body.username,
          'password': req.body.password,
          'displayname': req.body.displayname
        });
        console.log('register' + user.displayname);
        return usr.save(function(err, result) {
          if (!err) {
            console.log(err);
          } else {
            console.log(result);
            console.log('success!');
          }
          req.logIn(usr, function(err) {
            return res.end(sify({
              "status": "failed"
            }));
          });
          console.log(sify({
            "status": "success"
          }));
          return res.end(sify({
            "status": "success"
          }));
        });
      } else {
        if (err) {
          console.log('!!! error');
        }
        res.writeHead(200, {
          "Content-type": 'application/json'
        });
        console.log('register failed. user already exists');
        return res.end(sify({
          "status": "failed"
        }));
      }
    });
  };

}).call(this);
