const produkService = require("../service/produkService");

module.exports = {
  async handleRoot(req, res) {
    res.status(200).json({
      status: "Success",
      message: "Backend is running",
      data: data,
    });
  },

  async handlerGetProduk(req, res) {
    try {
      const { data, count } = await produkService.getAll();
      res.status(200).json({
        status: "Success",
        data: data,
        count: count,
      });
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  },
};
