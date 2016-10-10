/**
 * Created by vinidev on 17/07/16.
 */
'use strict'

const mongoose    = require('mongoose');
const User        = require('../models/user/user');
const Login       = require('../models/login/login');

const list = (req, res, next) => {
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

const permissions = (req, res, next) => {
    res.send('respond with permissions');
}

const login = (req, res, next) => {
    res.render('main/index');
}


const register = (req, res, next) => {


}

const signout = (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
}


const find = (req, res, next) => {
    console.log(req.params);
    User.findById( req.params.id, function(error, user) {
            if(user == null){
                res.status(400).send(error.message);
            }else{
                res.status(200).send(user);
            }
    });
}

const UserController = {
    users       : list,
    login       : login,
    permissions : permissions,
    register    : register,
    signout     : signout
};

module.exports =  UserController;
