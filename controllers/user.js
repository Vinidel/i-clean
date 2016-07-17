/**
 * Created by vinidev on 17/07/16.
 */
module.exports = function(app){
    var UserController = {
        /* GET users listing. */
        users: function (req, res, next) {
            res.send('respond with users');
        },

        permissions: function (req, res, next) {
            res.send('respond with permissions');
        }
    };

    return UserController;
}