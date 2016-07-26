/**
 * Created by vinidev on 17/07/16.
 */

var mongoose = require('mongoose');

module.exports = function(app){
    var UserController = {
        /* GET users listing. */
        users: function (req, res, next) {
            mongoose.model('logins').find(function(err, logins){
                if(err){
                    res.send(err);
                    var stack = new Error().stack
                    console.log( stack );
                    console.log(err.message);
                }else{
                    res.send(logins);
                }
            });
        },

        permissions: function (req, res, next) {
            res.send('respond with permissions');
        },

        login: function (req, res, next){
            console.log(req.body.user);
            console.log(req.body.pass);
        }
    };

    return UserController;
}