const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

let cors0ptions = {
  origin: "*",
};

app.use(cors(cors0ptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
