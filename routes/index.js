
module.exports = function(app){
    var indexController = app.controllers.index;
    /* GET home page. */
    app.get('/', indexController.index);
    ///* GET login. */
    //app.get('/login', indexController.login);
}