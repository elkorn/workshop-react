'use strict';

var fb = new Firebase('https://react-workshop.firebaseio.com/products');
var ProductStore = require('../product-store');
var ProductActions = require('../../actions/product-actions');
var Product= require('../../models/product');

fb.on('value', function(snapshot) {
  console.log(snapshot.val());
  ProductActions.receive(new Product(snapshot.val()));
});

exports.push = function(product) {
  return fb.push(product);
};
