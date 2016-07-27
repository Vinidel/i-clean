/**
 * Created by vinidev on 17/07/16.
 */

var mongoose    = require('mongoose');
var User        = require('../models/user/user');
var Login       = require('../models/login/login');

function list(req, res, next) {
    User.
        find({}).
        populate('login').
        exec(function(error, users) {
          console.log(users[3]._id);  // OK
          console.log(users[3].login); // Is still an object id, doesn't get populated
          res.status(200).send(users);
        });

}

function permissions(req, res, next) {
    res.send('respond with permissions');
}

function login(req, res, next) {
    console.log(req.body.user);
    console.log(req.body.pass);
}


function register(req, res, next){
    var userName = req.body.userName;
    var realName = req.body.realName;
    var email    = req.body.email;
    var pass     = req.body.password;

    console.log(req.body.name);
    console.log(req.query);
    console.log(req.param);

    //console.log(req);
    var login = new Login({

            email: req.body.email,
            pass : req.body.pass
    });

    var user = new User({
     userName : req.body.userName,
     name     : req.body.name,
     active   : req.body.active,
     login    : login
    });


    user.save(function(err, user){
        if(err)res.status(500).send('an error ocurred');
        res.status(200).send(user);
    });
}

module.exports = function(app){
    const UserController = {
        users       : list,
        login       : login,
        permissions : permissions,
        register    : register
    };

    return UserController;
}