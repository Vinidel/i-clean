

module.exports = function(app, passport){
    var userController  = require('../controllers/user');
    /* GET users listing. */
    app.get('/users', userController.users);

    /* GET users permissions listing. */
    app.get('/users/permissions', userController.permissions);

    /* POST users login to verification. */
    app.get('/login', userController.login);

    /* GET Errors. */
    app.get('/error', userController.error);

    /* POST to register a new user. */
    app.post('/register', passport.authenticate('local-signup', {
        successRedirect : '/login', // redirect to the secure profile section
        failureRedirect : '/error', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

};
