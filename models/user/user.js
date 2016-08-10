/**
 * Created by vinidev on 17/07/16.
 */
'use strict';

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var bcrypt      = require('bcrypt-nodejs');


var userSchema = new mongoose.Schema({
    name        : String,
    username    : String,
    active      : Boolean,
    email       : String,
    password    : String
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);