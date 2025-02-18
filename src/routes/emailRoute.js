const express = require("express");
const router = express.Router();
const { getEmails, subscribeEmail } = require("../controllers/mailController");

router.get("/", getEmails); // GET /api/v1/email
router.post("/", subscribeEmail); // POST /api/v1/email

module.exports = router;
