const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/api/receber-localizacao", async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ success: false, message: "Faltam dados de localização." });
  }

  try {
    await axios.post("https://hooks.zapier.com/hooks/catch/21524692/2puxt6w/", {
      latitude,
      longitude
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar pro Zapier:", error.message);
    return res.status(500).json({ success: false, message: "Erro ao enviar para o Zapier." });
  }
});

module.exports = serverless(app);
