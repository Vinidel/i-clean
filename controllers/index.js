const index = (req, res, next) => {
    res.render('index');
}

const dashboard = (req, res, next) => {
    console.log(req.flash);
    var user = req.session.user;
    res.render('main/index');
}

const error = (req, res, next) => {
    res.status(400).send(req.flash());

}

const LoginController = {
    index       : index,
    dashboard   : dashboard,
    error       : error
};

module.exports =  LoginController;