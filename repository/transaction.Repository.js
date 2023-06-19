const { Transaction } = require("../models");

module.exports = {
  getAll() {
    return Transaction.findAll();
  },

  getByPk(id) {
    return Transaction.getByPk(id);
  },

  create(body) {
    return Transaction.create(body);
  },

  update(id, body) {
    return Transaction.update(body, { where: { id } });
  },

  delete(id) {
    return Transaction.destroy({ where: { id } });
  },

  count() {
    return Transaction.count();
  },
};
