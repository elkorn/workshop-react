'use strict';
var React = require('react');
var view = require('./view');

var ProductTable = React.createClass({
    render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(view.categoryRow(product));
            }

            rows.push(view.productRow(product));
            lastCategory = product.category;
        });

        return view.main(rows);
    }
});

module.exports = ProductTable;
