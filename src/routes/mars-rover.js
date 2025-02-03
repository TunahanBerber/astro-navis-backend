const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const sol = req.query.sol || 1000;
  const rover = req.query.rover || 'curiosity';
  const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${process.env.NASA_API_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Mars Rover API Hatası:", error.message);
    res.status(500).json({
      error: "Mars Rover fotoğrafları alınamadı.",
      details: error.message,
    });
  }
});

module.exports = router;
