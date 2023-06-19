const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const contollers = require("../controllers");
const multer = require("multer");
const upload = multer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(upload.none());

// root
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Backend is running",
  });
});

// products
app.get("/products", contollers.produk.handlerGetProduk);
app.post("/products", contollers.produk.handleCreateProduk);
app.delete("/products/:id", contollers.produk.handleDeleteProduct);
app.put("/products/:id", contollers.produk.handleUpdateProduk);
app.get("/products/:id", contollers.produk.handleGetByIdProduk);

// authUsers
app.post("/registers", contollers.authUser.handlerCreateUser);
app.post("/login", contollers.authUser.handleLogin);
app.get("/users", contollers.authUser.handleGetAllUsers);
app.get(
  "/whoim",
  contollers.authUser.handleAuthorize,
  contollers.authUser.whoIm
);
app.put("/users/:id", contollers.user.handlerUpdateUser);
app.get("/users/:id", contollers.user.handlerGetUserByPk);
app.delete("/users/:id", contollers.user.handlerDeleteUser);

// cart
app.get("/carts/:id", contollers.cart.handlerfindAllCart);
app.post("/carts", contollers.cart.handleCreateChart);

// transaction
app.post("/transactions/:id", contollers.transaction.handllerCreateTransaction);

app.use((req, res) => {
  res.status(404).json({ error: "Router Not Found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
