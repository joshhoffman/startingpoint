(function() {
  exports.configRoutes = function(app) {
    require('../../routes/index')(app);
    require('../../routes/login')(app);
    return require('../../routes/user')(app);
  };

}).call(this);
