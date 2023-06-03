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

  async handleAuthorize(req, res, next) {
    try {
      const barerToken = req.headers.authorization;

      if (!barerToken) {
        const err = new Error("Barer worng barer token");
        throw err;
      }
      const token = barerToken.split("Barer ")[1];
      const user = await userService.authorize(token);

      if (!user) {
        const err = new Error("Unatuorize");
        throw err;
      }

      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({
        status: "FAIL",
        message: err.message,
      });
    }
  },

  async whoIm(req, res) {
    try {
      const user = req.user;
      res.status(200).json({
        status: "Success",
        data: user,
      });
    } catch (err) {
      res.status(400).json({
        status: "Fail",
        message: err.message,
      });
    }
  },
};
