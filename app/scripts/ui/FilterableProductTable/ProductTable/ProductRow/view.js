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

exports.main = function(component, product) {
    // WORKSHOP-TODO: You have to add a handler that will call the component's API method. HINT: there are no additional HTML elements required here. ;)
    return (
        <tr>
            <td>{name(product)}</td>
            <td>{product.price}</td>
            <td onClick={component._onDelete}>Delete</td>
        </tr>
    );
};
