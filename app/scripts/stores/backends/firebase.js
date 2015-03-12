/* global Firebase:true */
'use strict';

var fb = new Firebase('https://elkorn-workshops.firebaseio.com/react/products');
var ProductActions = require('../../actions/product-actions');
var Product = require('../../models/product');

function dtoToModel(dtos) {
  return Object.keys(dtos).map(function(id) {
    return Product.createFromStorage(dtos[id]);
  });
}

fb.on('value', function(snapshot) {
  console.log('value received');
  ProductActions.receive(dtoToModel(snapshot.val()));
});


exports.add = function(product) {
  return fb.child(product.id).set(product);
};

exports.remove= function(id) {
  return fb.child(id).remove();
};
