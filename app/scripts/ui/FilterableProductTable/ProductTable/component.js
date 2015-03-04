'use strict';
var React = require('react');
var view = require('./view');

function onlyIfInStock(fn) {
  return function(element) {
    if (element.inStock) {
      return fn(element);
    }
  };
}

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;

    function createRow(product) {
      if (product.category !== lastCategory) {
        rows.push(view.categoryRow(product));
      }

      rows.push(view.productRow(product));
      lastCategory = product.category;
    }

    if (this.props.inStockOnly) {
      this.props.products.forEach(onlyIfInStock(createRow));
    } else {
      this.props.products.forEach(createRow);
    }

    return view.main(rows);
  }
});

module.exports = ProductTable;
