file = null
fs = require 'fs'
modDate = null
date = new Date()

exports.indexold = (req, res) ->
    if req.isAuthenticated()
        res.render('index', {title: 'Starting Point', user: req.user})
    else
        res.render('index', {title: 'Starting Point', user: null})

exports.index = (req, res) ->
    fs.stat __dirname + '/../views/index.html', (err, stats) ->
        modDate = stats.mtime
        if file is null or modDate > date
            console.log __dirname + '/../views/index.html'
            fs.readFile __dirname + '/../views/index.html','utf8',(err, text) ->
                file = text
                res.end(file)
        else
            console.log 'cached'
            res.end file