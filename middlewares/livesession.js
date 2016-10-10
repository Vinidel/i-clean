/**
 * Created by vinidev on 3/08/16.
 */
module.exports = (req, res, next) => {
    if(!req.session.user){
        return res.redirect('/');
    }
    return next();
};
