'use strict';

function Product(id, name, category, price, stocked) {
  this.id = id;
  this.name = name.trim();
  this.price = Number(price);
  this.category = category.trim();
  this.stocked = stocked;
}

Product.create = function(name, category, price) {
  return new Product(null, name, category, price);
};

Product.createFromStorage = function(persistentData) {
  return new Product(persistentData.id, persistentData.name, persistentData.category, persistentData.price, persistentData.stocked);
};

Product.prototype.isValid = function() {
  return this.name !== '' &&
    !isNaN(this.price) &&
    this.category !== '';
};

module.exports = Product;
