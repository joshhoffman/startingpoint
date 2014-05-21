mongoose = require 'mongoose'

userSchema = mongoose.Schema {
    username: String
    password: String
    displayname: String
}

exports.userModel = mongoose.model "UserSchema", userSchema

###
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    displayname: String
});

exports.userModel = mongoose.model("UserSchema", userSchema);
###