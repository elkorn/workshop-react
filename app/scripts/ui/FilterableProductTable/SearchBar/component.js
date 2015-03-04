'use strict';

var React = require('react');
var view = require('./view');
var SearchBar = React.createClass({
    render: function() {
      return view.main(this);
    }
});

module.exports = SearchBar;

