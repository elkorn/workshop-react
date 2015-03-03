/** @jsx React.DOM */
/* jslint browser: true */
'use strict';

var React = window.React = require('react');
var mountNode = window.document.getElementById('app');
var PRODUCTS = require('./service/fixtures/products');
var view = require('./view');

var WorkshopApp = React.createClass({
  render: function() {
    return view.main(PRODUCTS);
  }
});

React.render(<WorkshopApp /> , mountNode);
