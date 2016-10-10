
module.exports = function(app){
    const indexController = require('../controllers/index');
    const sessionLive     = require('../middlewares/livesession');

    /* GET home page. */
    app.get('/', indexController.index);

    /* GET Errors. */
    app.get('/error', sessionLive, indexController.error);


}