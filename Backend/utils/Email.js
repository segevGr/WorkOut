const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      password: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Segev Grotas <segev.grotas@test.com>",
    to: options.email,
    subject: options.subject,
    text: options.text,
  };

  await transporter.send(mailOptions);
};

module.exports = sendEmail;
