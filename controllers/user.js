
/*
 * GET users listing.
 */

exports.users = function(req, res) {
    res.render('authentication/ViewUser', { user: req.user});
};

exports.userGet = function(req, res) {
    if(req.user !== null)
    {
        req.user.password = '';
        res.json(req.user);
    }
    else
    {
        console.log('in else');
        res.json({});
    }
};