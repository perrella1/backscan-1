const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post("/receber-localizacao", async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error });
  }

  console.log("Localização recebida:");
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);



});



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
