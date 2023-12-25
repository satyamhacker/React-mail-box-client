const mongoose = require('mongoose'); // Import Mongoose

const AddMail = require("../Models/Add_mail"); // Assuming this is the Mongoose model

const fetchSentMail = async (req, res) => {
  try {
    const { loggedInUserMail } = req.body;

    // Retrieve emails matching the senderEmail using Mongoose syntax
    const fetchedMails = await AddMail.find({
      senderEmail: loggedInUserMail,
    });

    // Respond with the fetched emails
    res.status(200).json(fetchedMails);
  } catch (error) {
    console.error("Error fetching mail:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchInboxMail = async (req, res) => {
  try {
    const { loggedInUserMail } = req.body;

    // Retrieve emails matching the senderEmail using Mongoose syntax
    const fetchedMails = await AddMail.find({
      receiverEmail: loggedInUserMail,
    });

    // Respond with the fetched emails
    res.status(200).json(fetchedMails);
  } catch (error) {
    console.error("Error fetching mail:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  fetchSentMail,
  fetchInboxMail,
};
