/**
 * Created by vinidev on 26/07/16.
 */
'use strict';

// Development specific configuration
// ==================================
module.exports = {

    // MongoDB connection options
    mongo: {
        uri: 'mongodb://127.0.0.1:27017/schedyou-dev'
    },

    // Seed database on startup
    seedDB: true
};
