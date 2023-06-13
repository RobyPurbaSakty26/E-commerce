const produk = require("./porodukController");
const authUser = require("./authControllers");
const user = require("./userControllers");
const cart = require("../controllers/cartCoroller");

module.exports = {
  produk,
  authUser,
  user,
  cart,
};
