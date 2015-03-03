/** @jsx React.DOM */

var React = window.React = require('react'),
    Timer = require('./ui/Timer'),
    mountNode = document.getElementById('app');

var WorkshopApp = React.createClass({
  render: function() {
    return (
        <Timer />
    );
  }
});


React.renderComponent(<WorkshopApp />, mountNode);

