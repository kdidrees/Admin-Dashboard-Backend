const mailgun = require("mailgun-js");

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

exports.sendEmail = async (req, res) => {
  try {
    const { name, email, phone, query } = req.body;

    const mailOptions = {
      from: "GrowXads <noreply@sandbox046522edaae545eaa7f03e236e5471d6.mailgun.org>",
      to: "umarkhurshid3@gmail.com", // admin email here
      subject: "New Query Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery: ${query}`,
    };

    // Send email using Mailgun
    mg.messages().send(mailOptions, (error, body) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email." });
      } else {
        console.log("Email sent:", body);
        res.status(200).json({ message: "Email sent successfully!" });
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
};
