exports.configRoutes = (app) ->
    require('../../routes/index') app
    require('../../routes/login') app
    require('../../routes/user') app