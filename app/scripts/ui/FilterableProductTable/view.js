'use strict';

var SearchBar = require('./SearchBar/component');
var ProductTable = require('./ProductTable/component');

module.exports = function(props) {
    return (
<div>
    <SearchBar />
    <ProductTable products={props.products} />
</div>
    );
};
