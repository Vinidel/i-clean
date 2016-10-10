/**
 * Created by vinidev on 17/07/16.
 */
'use strict';

const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const bcrypt      = require('bcrypt-nodejs');


const userSchema = new mongoose.Schema({
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