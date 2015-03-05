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

};

module.exports = ProductActions;
