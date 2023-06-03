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
        status: "OK",
        data,
        count,
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

      const data = await produkService.create(body);
      // console.log(data);
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
          status: "OK",
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

  async handleUpdateProduk(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({
          status: "Fail",
          message: "Please Insert Id",
        });
      }
      const body = req.body;
      const produk = await produkService.update(id, body);
      res.status(200).json({
        status: "OK",
        data: produk,
      });
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  },

  async handleGetByIdProduk(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({
          status: "Fail",
          Message: "Please Insert Id",
        });
      }
      const produk = await produkService.getByPk(id);
      if (!produk) {
        return res.status(404).json({
          status: "Fail",
          message: "Id not found",
        });
      }
      res.status(200).json({
        status: "OK",
        data: produk,
      });
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  },
};
