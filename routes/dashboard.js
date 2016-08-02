/**
 * Created by vinidev on 2/08/16.
 */

module.exports = function(app){
    var indexController = require('../controllers/index');

    /* GET dashboard page. */
    app.get('/dashboard', indexController.dashboard);

}