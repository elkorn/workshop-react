'use strict';

var React = require('react');
var view = require('./view');

var ProductCategoryRow = React.createClass({
    render: function() {
        return view.main(this.props.category);
    }
});

module.exports = ProductCategoryRow;
