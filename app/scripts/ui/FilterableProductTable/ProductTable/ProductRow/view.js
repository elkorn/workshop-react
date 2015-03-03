'use strict';

function nameStocked(product) {
    return product.name;
}

function nameUnstocked(product) {
    return (
            <span style={{color: 'red'}}>
                {product.name}
            </span>
    );
}

function name(product) {
    return product.stocked ?
            nameStocked(product) :
            nameUnstocked(product);
}

exports.main = function(product) {
    return (
        <tr>
            <td>{name(product)}</td>
            <td>{product.price}</td>
        </tr>
    );
};
