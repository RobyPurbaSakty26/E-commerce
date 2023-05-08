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
};
