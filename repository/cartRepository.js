const { Keranjang, Product, User } = require("../models");

module.exports = {
  getAll(id) {
    return Keranjang.findAll({
      include: [{ model: Product }, { model: User }],

      where: {
        idUser: id,
      },
    });
  },

  findByPk(id) {
    return Keranjang.findByPk(id);
  },

  create(body) {
    return Keranjang.create(body);
  },

  update(id, body) {
    return Keranjang.update(body, { where: { id } });
  },

  count(id) {
    return Keranjang.count({
      where: {
        idUser: id,
      },
    });
  },

  delete(id) {
    return Keranjang.destroy({ where: { id } });
  },
};
