const { User } = require("../models");

module.exports = {
  getAll() {
    return User.findAll();
  },

  create(id) {
    return User.create(id);
  },

  update(id, body) {
    return User.update(body, { where: { id } });
  },

  findByPk(id) {
    return User.findByPk(id);
  },

  count() {
    return User.count();
  },

  delete(id) {
    return User.destroy({ where: { id } });
  },
};
