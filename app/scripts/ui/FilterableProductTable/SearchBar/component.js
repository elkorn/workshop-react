'use strict';

var React = require('react');
var view = require('./view');
var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value,
      this.refs.inStockOnlyInput.getDOMNode().checked
    );
  },
  render: function() {
    return view.main(this);
  }
});

module.exports = SearchBar;
