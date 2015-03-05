'use strict';

var React = require('react');
var view = require('./view');
var Product = require('../../models/product');

function clear(ref) {
  ref.getDOMNode().value = '';
}

function value(ref) {
  return ref.getDOMNode().value;
}

var ProductInput = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      price: '',
      category: ''
    };
  },
  render: function() {
    return view.main(this);
  },
  _onSubmit: function() {
    // I decided to pass this upwards - the Action could be created here
    // directly.
    this.props.onCreate(Product.create(
      value(this.refs.name),
      value(this.refs.category),
      value(this.refs.price)
    ));

    clear(this.refs.name);
    clear(this.refs.category);
    clear(this.refs.price);
  }
});

module.exports = ProductInput;
