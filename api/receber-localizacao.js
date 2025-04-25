const axios = require("axios");

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { latitude, longitude, maps } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ success: false, message: "Dados de localização incompletos." });
    }

    try {
      // Enviar para o Zapier
      await axios.post("https://hooks.zapier.com/hooks/catch/21524692/2puxt6w/", {
        latitude,
        longitude,
        maps
      });

      // Retorna sucesso se tudo der certo
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Erro ao enviar para o Zapier:", error);
      return res.status(500).json({ success: false, message: "Erro ao enviar para o Zapier." });
    }
  } else {
    return res.status(405).json({ success: false, message: "Método não permitido." });
  }
};
