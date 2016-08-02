
module.exports = function(app){
    var indexController = require('../controllers/index');
    var sessionLive     = require('../middlewares/livesession');

    /* GET home page. */
    app.get('/', indexController.index);

    /* GET Errors. */
    app.get('/error', sessionLive, indexController.error);


}