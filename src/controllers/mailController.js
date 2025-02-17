const { Email } = require("../models/emailModel");

const getEmails = async (req, res) => {
  try {
    const emails = await Email.find();
    res.status(200).json(emails);
  } catch (error) {
    console.error("Error retrieving emails:", error.message);
    res.status(500).json({ error: "Failed to retrieve emails", details: error.message });
  }
};

const subscribeEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: "Email subscribed successfully" });
  } catch (error) {
    console.error("Error subscribing email:", error.message);
    res.status(500).json({ error: "Failed to subscribe email", details: error.message });
  }
};

module.exports = { getEmails, subscribeEmail };