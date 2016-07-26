/**
 * Created by vinidev on 17/07/16.
 */

var mongoose = require('mongoose');

function list(req, res, next) {
    mongoose.model('users').find(function(err, logins){
        if(err){
            res.send(err);
        }else{
            res.send(logins);
        }
    });
}

function permissions(req, res, next) {
    res.send('respond with permissions');
}

function login(req, res, next){
    console.log(req.body.user);
    console.log(req.body.pass);
}

module.exports = function(app){
    const UserController = {
        users       : list,
        login       : login,
        permissions : permissions
    };

    return UserController;
}