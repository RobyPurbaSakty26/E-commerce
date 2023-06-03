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
        status: "OK",
        message: "UPDATE DATA BERHASIL",
      });
    } catch (err) {
      res.status(401).json({
        status: "FAIL",
        message: err.message,
      });
    }
  },
};
