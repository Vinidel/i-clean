

module.exports = function(app){
    var userController = app.controllers.user;
    /* GET users listing. */
    app.get('/users', userController.users);

    /* GET users permissions listing. */
    app.get('/users/permissions', userController.permissions);
};
