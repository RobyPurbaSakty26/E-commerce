const express = require("express");
const app = express();
const port = 3000;
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

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
