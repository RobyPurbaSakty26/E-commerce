const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Data berhasil di akses",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
