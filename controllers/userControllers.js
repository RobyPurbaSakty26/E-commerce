const userService = require("../service/userService");

module.exports = {
  async handlerUpdateUser(req, res) {
    try {
      const { name, email, username, address, password, sex, foto, noPhone } =
        req.body;

      const body = {
        name,
        email,
        username,
        address,
        password,
        sex,
        foto,
        noPhone,
      };

      if (!email) userService.verifyEmail(email);

      const params = req.params.id;
      await userService.update(params, body);

      res.status(201).json({
        status: "Ok",
        message: "UPDATE DATA BERHASIL",
      });
    } catch (err) {
      res.status(401).json({
        status: "FAIL",
        message: err.message,
      });
    }
  },

  async handlerGetUserByPk(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        const err = new Error("Id null");
        throw err;
      }

      const isData = await userService.getByPk(id);

      if (!isData) {
        res.status(404).json({
          status: "Fail",
          message: "ID Not found",
        });
        return;
      }

      res.status(200).json({
        status: "Ok",
        data: isData,
      });
    } catch (err) {
      res.status(401).json({
        status: "FAIL",
        message: err.message,
      });
    }
  },

  async handlerDeleteUser(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        const err = new Error("Id null");
        throw err;
      }

      const isData = await userService.delete(id);
      if (!isData) {
        res.status(404).json({
          status: "Fail",
          message: "ID Not found",
        });
        return;
      }

      res.status(202).json({
        status: "Ok",
        message: "Delete Data success",
      });
    } catch (err) {
      res.status(401).json({
        status: "FAIL",
        message: err.message,
      });
    }
  },
};
