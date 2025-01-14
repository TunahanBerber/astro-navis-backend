const express = require("express");
const router = express.Router();
const axios = require("axios");

// APOD Route - GET: Sadece APOD verisini getir
router.get("/", async (req, res) => {
  try {
    // NASA APOD API'ye istek gönder
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    );

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