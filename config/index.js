const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const contollers = require("../contollers");

app.use(express.json());

// root
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Backend is running",
  });
});

// products
app.get("/product", contollers.produk.handlerGetProduk);
app.post("/product", contollers.produk.handleCreateProduk);
app.delete("/product/:id", contollers.produk.handleDeleteProduct);
app.put("/product/:id", contollers.produk.handleUpdateProduk);
app.get("/product/:id", contollers.produk.handleGetByIdProduk);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
