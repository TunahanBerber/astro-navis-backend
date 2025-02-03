const express = require("express");
const router = express.Router();
const axios = require("axios");

// APOD Route - GET: Tarih parametresine göre APOD verisi getir
router.get("/", async (req, res) => {
  const date = req.query.date; // Query parametresinden tarih al
  const apiUrl = date
    ? `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${date}`
    : `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;

  try {
    // NASA APOD API'ye istek gönder
    const response = await axios.get(apiUrl);

    // API'den gelen veriyi döndür
    res.status(200).json(response.data);
  } catch (error) {
    console.error("APOD API Hatası:", error.message);
    res.status(500).json({
      error: "APOD verisi alınamadı.",
      details: error.message,
    });
  }
});

module.exports = router;
