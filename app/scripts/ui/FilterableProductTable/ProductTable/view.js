'use strict';
var ProductCategoryRow = require('./ProductCategoryRow/component');
var ProductRow = require('./ProductRow/component');


exports.categoryRow = function(product) {
    return (
        <ProductCategoryRow category={product.category} key={product.category} />
    );
};

exports.productRow = function(product) {
    return (
        <ProductRow product={product} key={product.name} />
    );
};

exports.main =function(rows) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
};
