/**
 * Created by vinidev on 17/07/16.
 */
var Login = function (data) {
    this.data = data;
}

Login.prototype.data = {}

Login.prototype.changePassword = changePassWord;


function changePassWord(pass) {
    this.data.password = pass;
}


Login.findById = function (id, callback) {
    db.get('logins', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Login(data));
    });
}

module.exports = Login;