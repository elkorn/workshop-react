'use strict';

var SearchBar = require('./SearchBar/component');
var ProductTable = require('./ProductTable/component');

module.exports = function(component) {
    return (
<div>
    <SearchBar
      filterText={component.state.filterText}
      inStockOnly={component.state.inStockOnly}
      onUserInput={component.handleUserInput}
    />
    <ProductTable
      products={component.props.products}
      filterText={component.state.filterText}
      inStockOnly={component.state.inStockOnly}
    />
</div>
    );
};
