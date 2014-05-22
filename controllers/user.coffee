exports.users = (req, res) ->
    res.end {status: 'fail'}

exports.userGet (req, res) ->
    if req.user is not null
        req.user.password = ''
        res.json req.user
    else
        console.log 'in userGet else'
        res.json {}