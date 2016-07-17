module.exports = function(app){
    var LoginController = {
        index : function(req, res){
            res.render('index');
        },

        login : function(req, res){
            console.log(req.query.user);
            console.log(req.query.pass);
            res.render('main/index');
        }
    };

    return LoginController;
}