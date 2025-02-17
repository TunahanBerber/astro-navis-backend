const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// MongoDB Connection
const connectionString = process.env.CONNECTION_STRING;
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API Base URL
const api = process.env.API_URL || "/api";

// Routes
const apodRoute = require("./src/routes/apodRoute");
const marsRoverRoute = require("./src/routes/marsRoverRoute"); 
const emailRoute = require("./src/routes/emailRoute"); 

app.use(`${api}/apod`, apodRoute);
app.use(`${api}/mars-rover`, marsRoverRoute); 
app.use(`${api}/email`, emailRoute); 

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the AstroNavis Backend!");
});

// Start Server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
