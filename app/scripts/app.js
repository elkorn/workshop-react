/** @jsx React.DOM */

var React = window.React = require('react'),
    Timer = require('./ui/Timer'),
    FilterableProductTable = require('./ui/FilterableProductTable/component'),
    mountNode = document.getElementById('app'),
    PRODUCTS = require('./service/fixtures/products');

var WorkshopApp = React.createClass({
  render: function() {
    return (
        <div>
            <FilterableProductTable products={PRODUCTS} />
            <Timer />
        </div>
    );
  }
});

React.render(<WorkshopApp /> , mountNode);
