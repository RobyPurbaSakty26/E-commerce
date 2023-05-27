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
app.get("/products", contollers.produk.handlerGetProduk);
app.post("/products", contollers.produk.handleCreateProduk);
app.delete("/products/:id", contollers.produk.handleDeleteProduct);
app.put("/products/:id", contollers.produk.handleUpdateProduk);
app.get("/products/:id", contollers.produk.handleGetByIdProduk);

app.use((req, res, next) => {
  res.status(404).json({ error: "Router Not Found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
