
module.exports = function(app){
    var indexController = require('../controllers/index');
    /* GET home page. */
    app.get('/', indexController.index);

    /* GET Errors. */
    app.get('/error', indexController.error);


}