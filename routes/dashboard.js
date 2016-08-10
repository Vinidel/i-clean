/**
 * Created by vinidev on 2/08/16.
 */

module.exports = function(app){
    var indexController = require('../controllers/index');
    var sessionLive     = require('../middlewares/livesession');

    /* GET dashboard page. */
    app.get('/dashboard', sessionLive ,indexController.dashboard);

}