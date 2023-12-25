const express = require("express");
const app = express();
const signupLogin = require("./Signup_Login");
const addMail = require("./Add_mail");
const fetchMail = require("./Fetch_sent_inbox_mail");
const deleteMail = require("./Delete_mail");
const makeEmailRead = require("./Make_email_read");

const cors = require("cors");

const port = 3000; // Port number on which your server will run

app.use(cors()); // Enable CORS for all routes

// Middleware to parse JSON requests
app.use(express.json());

app.post("/signup", signupLogin.signupCreate);
app.post("/login", signupLogin.login);

app.post("/addmail", addMail.addMail);
app.post("/fetchsentmail", fetchMail.fetchSentMail);
app.post("/deletemail", deleteMail.deleteMail);
app.post("/fetchinboxmail", fetchMail.fetchInboxMail);
app.delete("/deletemail/:id", deleteMail.deleteMail);
app.post("/makeemailread", makeEmailRead.makeEmailRead);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
