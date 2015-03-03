'use strict';
var Timer = require('./ui/Timer');
var FilterableProductTable = require('./ui/FilterableProductTable/component');

exports.main = function(products) {
    return (
        <div>
            <FilterableProductTable products={products} />
            <Timer />
        </div>
    );
};
