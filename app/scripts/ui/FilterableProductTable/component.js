'use strict';

var React = require('react');
var view = require('./view');

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },
  render: function() {
    return view(this.props, this.state);
  }
});

module.exports = FilterableProductTable;
