require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Kiểm tra SMTP
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Configuration Error:", error.message);
  } else {
    console.log("SMTP Server is ready to send emails.");
  }
});

module.exports = transporter;
