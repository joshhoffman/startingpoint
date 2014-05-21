index = require '../controllers/index.js'

module.exports = (app) ->
    app.get '/', index.index