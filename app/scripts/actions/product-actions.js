'use strict';

/**
 * ProductActions
 */

var AppDispatcher = require('../dispatcher/app-dispatcher');
var ProductConstants = require('../constants/product-constants');

var ProductActions = {

  /**
   * @param  {string} text
   */
  create: function(product) {
    AppDispatcher.handleViewAction({
      actionType: ProductConstants.PRODUCT_CREATE,
      product: product
    });
  },

  // WORKSHOP-TODO: You have to create an action that informs the dispatcher that a product is to be deleted. If you don't know where to start here, see how the app/scripts/stores/product-store.js works.
  destroy: function (id) {
   AppDispatcher.handleViewAction({
     actionType: ProductConstants.PRODUCT_DESTROY,
     id: id
   });
  },

  receive: function(product) {
    AppDispatcher.handleServerAction({
      actionType: ProductConstants.PRODUCT_CREATE,
      product: product
    });
  }
};

module.exports = ProductActions;
