/**
 * Created by vinidev on 17/07/16.
 */
'use strict';

var mongoose = require('mongoose');


var loginSchema = new mongoose.Schema({
    userName: String,
    password: String
    //active  : Boolean
});

mongoose.model('Thing', loginSchema);