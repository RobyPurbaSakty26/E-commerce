const { produk } = require("../models");
const productRepository = require("../repository/productRepository");

module.exports = {
  async getAll() {
    try {
      const data = await productRepository.getAll();
      const count = await productRepository.count();
      return {
        data: data,
        count: count,
      };
    } catch (err) {
      throw err;
    }
  },
  async create(body) {
    try {
      console.log(body);
      const data = await productRepository.create(body);
      return data;
    } catch (err) {
      throw err;
    }
  },
  async delete(id) {
    try {
      const isdelete = await productRepository.delete(id);
      return isdelete;
    } catch (err) {
      throw err;
    }
  },

  async update(id, body) {
    try {
      return await productRepository.update(id, body);
    } catch (err) {
      throw err;
    }
  },

  async getByPk(id) {
    try {
      return productRepository.getByPk(id);
    } catch (err) {
      throw err;
    }
  },
};
