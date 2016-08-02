

module.exports = function(app, passport){
    var userController  = require('../controllers/user');
    /* GET users listing. */
    app.get('/users', userController.users);

    /* GET users permissions listing. */
    app.get('/users/permissions', userController.permissions);


    /* POST users login to verification. */
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/dashboard', // redirect to the secure profile section
        failureRedirect : '/error', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    /* POST to register a new user. */
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/dashboard', // redirect to the secure profile section
        failureRedirect : '/error', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

};
