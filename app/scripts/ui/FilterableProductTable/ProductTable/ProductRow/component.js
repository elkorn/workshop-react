'use strict';

var React = require('react');
var view = require('./view');

var ProductRow = React.createClass({
    render: function() {
        return view.main(this.props.product);
    }
});

module.exports = ProductRow;
