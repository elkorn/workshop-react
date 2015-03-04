'use strict';

exports.main = function render(component) {
    return (
        <form>
            <input type="text" placeholder="Search..." value={component.props.filterText} />
            <p>
                <input id="inStockOnly" type="checkbox" value={component.props.inStockOnly}/>
                <label htmlFor="inStockOnly">Only show products in stock</label>
            </p>
        </form>
    );
};
