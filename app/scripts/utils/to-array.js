'use strict';
module.exports = function toArray(obj) {
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
};
