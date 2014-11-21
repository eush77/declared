'use strict';


module.exports = function () {
  for (var i = 0; i < arguments.length; ++i) {
    if (arguments[i] != null) {
      return arguments[i];
    }
  }
};
