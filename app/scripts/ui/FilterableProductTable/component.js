'use strict';

var React = require('react');
var view = require('./view');

var FilterableProductTable = React.createClass({
    render: function() {
        return view(this.props);
    }
});

module.exports = FilterableProductTable;
