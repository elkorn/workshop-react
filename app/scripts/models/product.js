'use strict';

function Product(name, category, price) {
  this.name = name.trim();
  this.price = Number(price);
  this.category = category.trim();
}

Product.create = function(name, category, price) {
  return new Product(name, category, price);
};

Product.prototype.isValid = function() {
  return this.name !== '' &&
    !isNaN(this.price) &&
    this.category !== '';
};

module.exports = Product;
