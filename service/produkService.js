const { produk } = require("../models");

module.exports = {
  async getAll() {
    try {
      const data = await produk.findAll();
      const count = await produk.count();
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
      const data = await produk.create(body);
      return data;
    } catch (err) {
      throw err;
    }
  },
  async delete(id) {
    try {
      const isdelete = await produk.destroy({ where: { id } });
      return isdelete;
    } catch (err) {
      throw err;
    }
  },

  async update(id, body) {
    try {
      return await produk.update(body, { where: { id } });
    } catch (err) {
      throw err;
    }
  },

  async getByPk(id) {
    try {
      return produk.findByPk(id);
    } catch (err) {
      throw err;
    }
  },
};
