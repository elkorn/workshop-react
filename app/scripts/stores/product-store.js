'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var ProductConstants = require('../constants/product-constants');
var assign = require('object-assign');
var toArray = require('../utils/to-array');

var fixture = require('./fixtures/products');

var CHANGE_EVENT = 'change';

var _products = {}; // collection of product items
var _productsArray = [];

function updateProductArray() {
  _productsArray = toArray(_products);
}

/**
 * Create a product.
 * @param {string} text The content of the product
 */
function create(product) {
  // Using the current timestamp in place of a real id.
  var id = Date.now().valueOf() + Math.random().toString();
  _products[id] = {
    id: id,
    name: product.name,
    price: product.price,
    category: product.category,
    stocked: Math.random() > 0.5
  };

  updateProductArray();
}


/**
 * Delete a product.
 * @param {string} id
 */
function destroy(id) {
  // NOTE: Do not use `delete` in this way on your production apps!
  delete _products[id];
  updateProductArray();
}

(function init(products) {
  products.forEach(create);
}(fixture));

var ProductStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of products.
   * @return {object}
   */
  getAll: function() {
    return _productsArray;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.actionType) {
      case ProductConstants.PRODUCT_CREATE:
        if (action.product.isValid()) {
          create(action.product);

          ProductStore.emitChange();
        }

        break;

      // WORKSHOP-TODO: You have to handle an action that deletes a product. There is a constant defined for it. HINT: Look at the `destroy` function signature.
      case ProductConstants.PRODUCT_DESTROY:
        if(action.id !== '') {
          destroy(action.id);

          ProductStore.emitChange();
        }
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = ProductStore;
