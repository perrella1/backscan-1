const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());


<<<<<<< HEAD
app.post("/receber-localizacao", async (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    return res.status(400).json({ error });
=======
app.post("/send-location", async (req, res) => {
  const { latitude, longitude, maps } = req.body;

  const message = `A localização do usuário é:\nLatitude: ${latitude}\nLongitude: ${longitude}\nMaps: ${maps}`;

  try {
    // Envia a localização para o Telegram
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Erro ao enviar a localização para o Telegram." });
>>>>>>> c049881caf60e7901ca4b11fd3f7e2a3a9cdbb9f
  }

  console.log("Localização recebida:");
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);



});

<<<<<<< HEAD


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
=======
app.listen(8088, () => {
  console.log("Servidor rodando na porta 8088");
});
>>>>>>> c049881caf60e7901ca4b11fd3f7e2a3a9cdbb9f
