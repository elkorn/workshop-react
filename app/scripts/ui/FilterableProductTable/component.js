'use strict';

var React = require('react');
var view = require('./view');

var FilterableProductTable = React.createClass({
  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  },
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },
  render: function() {
    return view(this);
  }
});

module.exports = FilterableProductTable;
