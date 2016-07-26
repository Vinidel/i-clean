/**
 * Created by vinidev on 17/07/16.
 */
'use strict';

var mongoose = require('mongoose');


var loginSchema = new mongoose.Schema({
    email: String,
    password: String
    //active  : Boolean
});

mongoose.model('logins', loginSchema);