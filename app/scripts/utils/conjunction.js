'use strict';

// Variadic conjunction of functions for faster filtering.
function conjunction() {
      var funcs = Array.isArray(arguments[0]) ? arguments[0] : arguments;

      return function() {
        var self = this;
        var args= arguments;
        return funcs.reduce(function(result, fn){
          if(result) {
            return fn.apply(self, args);
          }

          return result;
        }, true);
      };
}

module.exports = conjunction;
