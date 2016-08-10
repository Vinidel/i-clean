/**
 * Created by vinidev on 17/07/16.
 */
'use strict';

var mongoose = require('mongoose');


var loginSchema = new mongoose.Schema({
    email   : String,
    pass    : String
    //active  : Boolean
});

module.exports = mongoose.model('logins', loginSchema);