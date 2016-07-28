/**
 * Created by vinidev on 17/07/16.
 */
'use strict'

var mongoose    = require('mongoose');
var User        = require('../models/user/user');
var Login       = require('../models/login/login');

const UserController = {
    users       : list,
    login       : login,
    permissions : permissions,
    register    : register,
    error       : error
};

function list(req, res, next) {
    User.
        find({}).
        exec(function(error, users) {
          if(users.length === 0){
              res.status(400).send('NO users found');
          }else{
              res.status(200).send(users);
          }
        });
}

function permissions(req, res, next) {
    res.send('respond with permissions');
}

function login(req, res, next) {
    res.render('main/index');
}


function register(req, res, next){
 /*   var userName = req.body.userName;
    var realName = req.body.realName;
    var email    = req.body.email;
    var pass     = req.body.password;*/

    var user = new User({
     username : req.body.username,
     name     : req.body.name,
     active   : req.body.active,
     email    : req.body.email,
     password : req.body.password
    });

    user.save(function(err, user){
        if(err)res.status(500).send('an error ocurred');
        res.status(200).send(user);
    });
}


function error(req, res, next){
    res.send('Email has been already taken.');
}
module.exports =  UserController;