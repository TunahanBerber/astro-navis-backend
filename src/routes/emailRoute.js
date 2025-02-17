const express = require("express");
const router = express.Router();
const apodController = require("../controllers/mailController");

router.get("/"), mailController.getMail;

module.exports = router;