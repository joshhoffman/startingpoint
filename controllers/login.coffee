user = require '../models/user'
hashPassword = require 'password-hash'
passport = require 'passport'

sify = (s) -> JSON.stringify(s)


exports.loginPost = (req, res, next) ->
    passport.authenticate('local', (err, user) ->
        return next(err) if err
        return res.redirect '/login' if not user
        req.logIn user, (err) ->
            console.log 'in login'
            return next err if err
            console.log 'about to redirect'
            return next null, user
    )(req, res, next)

exports.registerPost = (req, res) ->
    console.log 'register'
    password = req.body.password
    confirmpassword = req.body.confirmpassword

    user.userModel.findOne {username: req.body.username}, (err, foundUser) ->
        if not foundUser and not err and password is confirmpassword
            usr = new user.userModel {
                'username': req.body.username
                'password': req.body.password
                'displayname': req.body.displayname
            }
            console.log 'register' + user.displayname
            usr.save (err, result) ->
                if not err
                    console.log err
                else
                    console.log result
                    console.log 'success!'
                req.logIn usr, (err) ->
                    res.end sify({"status":"failed"})
                console.log sify({"status":"success"})
                res.end sify({"status":"success"})
        else
            console.log '!!! error' if err
            res.writeHead 200, {"Content-type": 'application/json'}
            console.log 'register failed. user already exists'
            res.end(sify({"status":"failed"}))