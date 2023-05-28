const userService = require("../service/userService");

module.exports = {
  async handlerCreateUser(req, res) {
    try {
      const { name, email, password } = req.body;
      userService.verifyEmail(email);

      const user = await userService.register(name, email, password);

      res.status(201).json({
        status: "Created",
        data: user,
      });
    } catch (err) {
      res.status(401).json({
        status: "FAIL",
        message: err.message,
      });
    }
  },

  async handleGetAllUsers(req, res) {
    try {
      const { data, count } = await userService.getAll();
      res.status(200).json({
        status: "Ok",
        data: data,
        count: count,
      });
    } catch (err) {
      res.status(401).json({
        status: "FAIL",
        message: err.message,
      });
    }
  },

  async handleLogin(req, res) {
    try {
      const { email, password } = req.body;
      // console.log("ini controllers ", email);
      const user = await userService.login(email, password);

      res.status(201).json({
        status: "OK",
        data: user,
      });
    } catch (err) {
      res.status(401).json({
        status: "FAIL",
        message: err.message,
      });
    }
  },
};
