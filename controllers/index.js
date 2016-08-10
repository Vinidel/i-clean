



var LoginController = {
    index       : index,
    dashboard   : dashboard,
    error       : error
};

function index(req, res, next){
    res.render('index');
}

function dashboard(req, res, next){
    console.log(req.flash);
    res.render('main/index');
}

function error(req, res, next){

    res.status(400).send(req.flash());
}

module.exports =  LoginController;