
/*
 * GET home page.
 */

var file = null;
var fs = require('fs');
var modDate = null;
var date = new Date();

exports.indexold = function(req, res){
    if(req.isAuthenticated()) {
        res.render('index', { title: 'Dogendar', user: req.user });
    }
    else {
        res.render('index', { title: 'Dogendar', user: null });
        /*if(file === null)
        {
            console.log(__dirname + '/../views/Ember/index.html');
            fs.readFile(__dirname + '/../views/Ember/index.html', 'utf8', function(err, text) {
                file = text;
                res.send(file);
            });
        }
        else
        {
            res.send(file);
        }*/
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
                res.send(file);
            });
        }
        else
        {
            console.log('cached');
            res.send(file);
        }
    });
};