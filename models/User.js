/**
 * Created by Josh on 3/24/14.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    displayname: String
});

exports.userModel = mongoose.model("UserSchema", userSchema);