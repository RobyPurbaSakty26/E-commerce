const produkService = require("../service/produkService");

module.exports = {
  handleRoot(req, res) {
    res.status(200).json({
      status: "Success",
      message: "Backend is running",
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

  async handleCreateProduk(req, res) {
    try {
      const body = req.body;
      console.log(body);
      const data = await produkService.create(body);
      res.status(200).json({
        status: "Created",
        data: data,
      });
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  },

  async handleDeleteProduct(req, res) {
    try {
      const id = req.params.id;
      const isdelete = await produkService.delete(id);
      if (!isdelete) {
        res.status(404).json({
          status: "Ok",
          message: "Delete data Fail",
        });
      }
      res.status(200).json({
        status: "Ok",
        message: "Delete data success",
      });
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  },
};
