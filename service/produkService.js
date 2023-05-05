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
};
