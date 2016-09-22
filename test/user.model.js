/**
 * Created by vinidev on 23/08/16.
 */
const User  = require('../models/user/user');
const expect = require('expect');

describe("User model", function() {
    it("should find all users", function(done) {
        User.find(done);
    });


    it("should save a new User", function(done) {
        var newUser = new User();
        newUser.active  = true;
        newUser.name    = 'Dummie';
        newUser.email   = 'mocha@test.com'
        newUser.password= 'flsifjsdlkfjsdklfsdklfnslfd';
        newUser.save(done);
    });

    it("should update an exiting User with name Dummie", function(done) {
        User.findOneAndUpdate({name : 'Dummie'}, {name : 'NOT Dummie'}, done);

    });

    it("should find one user with name NOT Dummie ", function(done) {
        User.find({name : 'NOT Dummie'}, done);
    });

    it("should delete one user with name NOT Dummie ", function(done) {
        User.find({name : 'NOT Dummie'}).remove().exec(done);
    });

});





