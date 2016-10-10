/**
 * Created by vinidev on 2/08/16.
 */

module.exports = function(app){
    const indexController = require('../controllers/index');
    const sessionLive     = require('../middlewares/livesession');

    /* GET dashboard page. */
    app.get('/dashboard', sessionLive ,indexController.dashboard);

}