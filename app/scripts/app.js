/** @jsx React.DOM */
/* jslint browser: true */
'use strict';

var React = window.React = require('react');
var mountNode = window.document.getElementById('app');
var view = require('./view');
var ProductStore = require('./stores/product-store');
var ProductActions = require('./actions/product-actions');

function getState() {
  console.log(ProductStore.getAll());
  return {
    products: ProductStore.getAll()
  };
}

var WorkshopApp = React.createClass({
  getInitialState: getState,
  render: function() {
    return view.main(this, this.state.products);
  },
  componentDidMount: function() {
    ProductStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(getState());
  },
  createProduct: function(product) {
    console.log('creating', product);
    ProductActions.create(product);
  }
});

React.render(<WorkshopApp /> , mountNode);
