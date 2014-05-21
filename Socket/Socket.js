(function() {
  var io;

  io = null;

  exports.onConnection = function(socket) {};

  exports.send = function(data) {};

  exports.setIO = function(socket) {
    io = socket;
    return true;
  };

}).call(this);
