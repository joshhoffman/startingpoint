
/*
 * GET home page.
 */

var file = null;
var fs = require('fs');
var modDate = null;
var date = new Date();

exports.indexold = function(req, res){
    if(req.isAuthenticated()) {
        res.render('index', { title: 'Starting Point', user: req.user });
    }
    else {
        res.render('index', { title: 'Starting Point', user: null });
    }
};

exports.index = function(req, res) {

    fs.stat(__dirname + '/../views/index.html', function(err, stats) {
        // Cache file
        modDate = stats.mtime;
        if(file === null || modDate > date)
        {
            console.log(__dirname + '/../views/index.html');
            fs.readFile(__dirname + '/../views/index.html', 'utf8', function(err, text) {
                file = text;
                res.end(file);
            });
        }
        else
        {
            console.log('cached');
            res.end(file);
        }
    });
};