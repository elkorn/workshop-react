'use strict';

exports.main = function(component) {
  return (
      <section ref="form">
        <p>
          <label for="NewProductName">Name</label>
          <input id="NewProductName" ref="name" type="text" />
        </p>
        <p>
          <label for="NewProductCategory">Category</label>
          <input id="NewProductCategory" ref="category" type="text" />
        </p>
        <p>
          <label for="NewProductPrice">Price</label>
          <input id="NewProductPrice" ref="price" type="number" />
        </p>
        <button onClick={component._onSubmit}>Create product</button>
      </section>
      );
};
