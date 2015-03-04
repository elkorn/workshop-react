'use strict';

var SearchBar = require('./SearchBar/component');
var ProductTable = require('./ProductTable/component');

module.exports = function(props, state) {
    return (
<div>
    <SearchBar
      filterText={state.filterText}
      inStockOnly={state.inStockOnly}
    />
    <ProductTable
      products={props.products}
      filterText={state.filterText}
      inStockOnly={state.inStockOnly}
    />
</div>
    );
};
