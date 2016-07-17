
module.exports = function(app){
    app.get('/public', function(req, res, next) {
      res.render('');
    })
}