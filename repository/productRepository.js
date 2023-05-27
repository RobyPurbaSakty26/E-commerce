const { Product } = require("../models");

module.exports = {
  create(body) {
    return Product.create(body);
  },
  getAll() {
    return Product.findAll();
  },

  getByPk(id) {
    return Product.findByPk(id);
  },
  update(id, body) {
    return Product.update(body, { where: { id } });
  },
  count() {
    return Product.count();
  },
  delete(id) {
    return Product.destroy({ where: { id } });
  },
};
