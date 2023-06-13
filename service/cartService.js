const cart = require("../repository/cartRepository");

module.exports = {
  async findAll(id) {
    try {
      const data = await cart.getAll(id);
      const count = await cart.count(id);
      return {
        data,
        count,
      };
    } catch (err) {
      throw err;
    }
  },

  async create(body) {
    try {
      const data = await cart.create(body);
      return data;
    } catch (err) {
      throw err;
    }
  },

  async update(id, body) {
    try {
      await cart.update(id, body);
    } catch (err) {
      throw err;
    }
  },

  async findByPk(id) {
    try {
      const data = await cart.findByPk(id);
      return data;
    } catch (err) {
      throw err;
    }
  },
  async delete(id) {
    try {
      await cart.delete(id);
    } catch (err) {
      throw err;
    }
  },
};
