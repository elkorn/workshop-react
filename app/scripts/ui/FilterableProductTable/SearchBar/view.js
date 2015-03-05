'use strict';

exports.main = function render(component) {
    return (
        <form>
            <input
              type="text"
              placeholder="Search..."
              onChange={component.handleChange}
              value={component.props.filterText}
              ref="filterTextInput"
            />
            <p>
                <input
                  id="inStockOnly"
                  type="checkbox"
                  value={component.props.inStockOnly}
                  ref="inStockOnlyInput"
                  onChange={component.handleChange}
                />
                <label htmlFor="inStockOnly">
                  Only show products in stock
                </label>
            </p>
        </form>
    );
};
