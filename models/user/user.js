/**
 * Created by vinidev on 17/07/16.
 */
'use strict';

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name    :  String,
    userName: String,
    active  : Boolean,
    login   : {
        type: Schema.Types.ObjectId,
        ref : 'logins'
    }
});

mongoose.model('users', userSchema);