const transaction = require("../service/transaction");

module.exports = {
  async handllerCreateTransaction(req, res) {
    try {
      idUser = req.params.id;
      body = req.body.list_id_product;

      if (!idUser || !body) {
        const err = new Error("Data belum lengkap");
        throw err;
      }

      const { data, id } = await transaction.create(body, idUser);

      res.status(201).json({
        status: "Success",
        id_user: idUser,
        id_transaction: id,
        body: data,
      });
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  },
};
