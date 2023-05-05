const express = require("express");
const app = express();
const port = 3000;
const produk = require("./contollers");

app.use(express.json());

app.get("/", produk.produk.handleRoot);
app.get("/produk", produk.produk.handlerGetProduk);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
