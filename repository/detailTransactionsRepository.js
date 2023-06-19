const { DetailTransaction } = require("../models");

module.exports = {
  getAll() {
    return DetailTransaction.findAll({
      include: [{ model: all }],
    });
  },

  getByTransaction(id) {
    return DetailTransaction.findAll({
      where: {
        idTransaction: id,
      },
    });
  },

  getByPk(id) {
    return DetailTransaction.getByPk(id);
  },

  create(body) {
    return DetailTransaction.create(body);
  },

  update(id, body) {
    return DetailTransaction.update(body, { where: { id } });
  },

  delete(id) {
    return DetailTransaction.destroy({ where: { id } });
  },

  count() {
    return DetailTransaction.count();
  },
};
