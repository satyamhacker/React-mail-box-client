const mongoose = require("mongoose"); // Import Mongoose

const AddMail = require("../Models/Add_mail"); // Assuming this is the Mongoose model

const makeEmailRead = async (req, res) => {
  try {
    const { id } = req.body;

    //console.log("backend test");

    const result = await AddMail.findByIdAndUpdate(id, { emailRead: true });

    // Respond with the fetched emails
    res.status(200).json(true);
  } catch (error) {
    console.error("Error fetching mail:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  makeEmailRead,
};
