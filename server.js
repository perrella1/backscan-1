const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/receber-localizacao", async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "Latitude ou longitude ausente." });
  }

  console.log("Localização recebida:");
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);

  try {
    await axios.post("https://hooks.zapier.com/hooks/catch/21524692/2puxt6w/", {
      latitude,
      longitude,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar para o Zapier:", error.message);
    res.status(500).json({ success: false, message: "Erro ao enviar para Zapier." });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
