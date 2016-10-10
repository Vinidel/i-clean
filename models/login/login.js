/**
 * Created by vinidev on 17/07/16.
 */
'use strict';

const mongoose = require('mongoose');


const loginSchema = new mongoose.Schema({
    email   : String,
    pass    : String
    //active  : Boolean
});

module.exports = mongoose.model('logins', loginSchema);