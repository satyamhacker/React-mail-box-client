const addMailSchema = require("../Models/Add_mail");

const addMail = async (req, res) => {
  //console.log(req.body)

  try {
    // Extract data from the request body
    const { mailData, loggedInUserMail, emailCreatedDateAndTime } = req.body;

    const { To, Subject, Content } = mailData;

    //console.log("backend", To,Subject,Content,loggedInUserMail);

    // Check if required fields are provided
    if (!To || !Subject || !Content) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new medicine data record in the database
    const addedData = await addMailSchema.create({
      senderEmail: loggedInUserMail,
      receiverEmail: To,
      content: Content,
      subject: Subject,
      timeStamp: emailCreatedDateAndTime,
    });

    // Respond with a success message
    res.status(201).json("true");
  } catch (error) {
    console.error("Error creating medicine data:", error);
    // Handle the error and respond with an error status code
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addMail,
};
