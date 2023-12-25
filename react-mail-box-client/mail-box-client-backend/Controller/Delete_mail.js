const addMail = require("../Models/Add_mail");

const deleteMail = async (req, res) => {
  const { id } = req.params; // Use req.params to get the ID from the URL

  //console.log("test", id);

  try {
    // Use the findOneAndDelete method to delete a document based on a condition
    const deletedMail = await addMail.findOneAndDelete({
      _id: id,
    });

    // Check if a document was deleted
    if (deletedMail) {
      res.status(200).json(true);
    } else {
      res.status(404).json({ error: "Email not found" });
    }
  } catch (error) {
    console.error("Error deleting mail:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  deleteMail,
};
