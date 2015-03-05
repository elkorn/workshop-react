'use strict';

var React = require('react');
var view = require('./view');
var ProductActions = require('../../../../actions/product-actions');

var ProductRow = React.createClass({
  render: function() {
    return view.main(this, this.props.product);
  },

  // WORKSHOP-TODO: You have to implement the API method that creates an Action for deleting the product. See the TODO in app/scripts/actions/product-actions.js and refer to app/scripts/app.js to see how actions are issued.
  _onDelete: function() {
    return ProductActions.destroy(this.props.product.id);
  }
});

module.exports = ProductRow;
