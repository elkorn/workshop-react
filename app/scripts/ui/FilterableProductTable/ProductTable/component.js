'use strict';
var React = require('react');
var view = require('./view');
var conjunction = require('../../../utils/conjunction.js');

function isInStock(element) {
  return element.stocked;
}

function nameMatches(text) {
  return function(element) {
    return element.name.indexOf(text) !== -1;
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

    var filters = [];

    if (this.props.inStockOnly) {
      filters.push(isInStock);
    }

    if (this.props.filterText) {
      filters.push(nameMatches(this.props.filterText));
    }

    this.props.products.filter(conjunction(filters)).forEach(createRow);
    return view.main(rows);
  }
});

module.exports = ProductTable;
