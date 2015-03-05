'use strict';
var Timer = require('./ui/Timer');
var FilterableProductTable = require('./ui/FilterableProductTable/component');
var ProductInput = require('./ui/ProductInput/component');

exports.main = function(component, products) {
    return (
        <div>
            <FilterableProductTable products={products} />
            <ProductInput onCreate={component.createProduct} />
            <Timer />
        </div>
    );
};
