const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const contollers = require("./contollers");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Backend is running",
  });
});
app.get("/produk", contollers.produk.handlerGetProduk);
app.post("/produk", contollers.produk.handleCreateProduk);
app.delete("/produk/:id", contollers.produk.handleDeleteProduct);
app.put("/produk/:id", contollers.produk.handleUpdateProduk);
app.get("/produk/:id", contollers.produk.handleGetByIdProduk);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
