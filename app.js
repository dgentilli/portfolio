/*
    Contact Form 'Send' API
    
    usage: API endpoint for processing 'post' data submitted via an HTML contact form and
    sending an email, using SendGrid, nodeJS & Express

    REF: https://github.com/sendgrid/sendgrid-nodejs

*/

// DEPENDENCIES
//// Dotenv: read .env vars into Node (process.env)
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

//// Server
const app = express();

//// Body parser middleware (https://www.npmjs.com/package/body-parser)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//// SendGrid
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Pull in SendGrid API key from local ENV variables or Heroku Config Vars

const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL; // SEND EMAIL WITH CONTACT FORM DATA
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;

app.get("/api/test", (req, res) => res.send("Portfolio server is running."));

app.post("/api/send", (req, res) => {
  const postBody = req.body;
  // Logging data sent from client POST request
  console.log("client POST request body: ", postBody);

  // Define placeholder variables for email message in plain text and html formats
  let msgTxt = "";
  let msgHtml = "";

  // Get email data
  if (postBody.name) {
    msgTxt += "Name: " + postBody.name + "\n";
    msgHtml += "<strong>Name</strong>: " + postBody.name + "<br/><br/>";
  }

  if (postBody.email) {
    msgTxt += "Email: " + postBody.email + "\n";
    msgHtml += "<strong>Email</strong>: " + postBody.email + "<br/><br/>";
  }

  if (postBody.phone) {
    msgTxt += "Phone: " + postBody.phone + "\n";
    msgHtml += "<strong>Phone</strong>: " + postBody.phone + "<br/><br/>";
  }

  if (postBody.message) {
    msgTxt += "Message: \n" + postBody.message + "\n";
    msgHtml += "<strong>Message</strong>:<br/><p>" + postBody.message + "</p>";
  }

  // Store email data to an object for sending via SendGrid
  const emailData = {
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_FROM_EMAIL,
    // This could be used to send form from contact's email, but not recommeded due to potentially triggering spam flag
    //from: (postBody.email) ? postBody.email : SENDGRID_FROM_EMAIL,
    subject: postBody.subject
      ? postBody.subject
      : "New Website Contact Form Message",
    text: msgTxt,
    html: msgHtml
  };

  // Logging data we're sending to SendGrid API
  console.log("emailData:", emailData);

  // Send email with user's submitted data
  sgMail
    .send(emailData)
    .then(() => {
      res
        .status(200)
        .json({ success: true })
        .end();
    })
    .catch(e => {
      console.error(e.toString());
      res.status(500).end();
    });
});

const path = require("path");
//Public folder
//REF: https://expressjs.com/en/starter/static-files.html

// app.use(
//   "/assets",
//   express.static(path.join(__dirname, "client/public/assets"))
// );

app.use(
  "/assets",
  express.static(path.join(__dirname, "client/build/assets/video"))
);

//// Production build
if (process.env.NODE_ENV !== "development") {
  // Serve static files from the React frontend app
  app.use("/", express.static(path.join(__dirname, "client/build")));

  // Catch all -- anything that doesn't match the above, send back index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}
//// Run server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
