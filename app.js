const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// API Base URL
const api = process.env.API_URL || "/api";

// Routes
const apodRoute = require("./routes/apod");
app.use(`${api}/apod`, apodRoute);

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the AstroNavis Backend!");
});

// Start Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});