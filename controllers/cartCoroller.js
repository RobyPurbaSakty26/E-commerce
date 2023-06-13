const cart = require("../service/cartService");

module.exports = {
  async handlerfindAllCart(req, res) {
    try {
      const id = req.params.id;

      const { data, count } = await cart.findAll(id);

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

  async handleCreateChart(req, res) {
    try {
      const body = req.body;
      const data = await cart.create(body);

      res.status(201).json({
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
};
