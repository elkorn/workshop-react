'use strict';

var Dispatcher = require('./base-dispatcher');
var assign = require('object-assign');
var test = {
    volumetric: 12
};

var test2 = {
    a: 12
};

var AppDispatcher = assign({}, Dispatcher.prototype, {
    /**
     * A bridge function between the views and the dispatcher, marking the action
     * as a view action.  Another variant here could be handleServerAction.
     * @param  {object} action The data coming from the view.
     */
    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    },
    handleServerAction: function(action) {
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    }

});

module.exports = AppDispatcher;
