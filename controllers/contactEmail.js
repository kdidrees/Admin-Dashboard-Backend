const mailgun = require('mailgun-js');


// initialize mailgun 

const mg = mailgun({
    apiKey: 'your-mailgun-api-key',
    domain: 'your-mailgun-domain.com'
});

// Controller function to handle form submission

const sendEmail = async (req, res) => {
    try {
        // Extract data from request body
        const { name, email, phone, query } = req.body;

        // Mailgun email options
        const mailOptions = {
            from: 'your-email@your-domain.com', // Replace with sender email
            to: 'recipient-email@example.com', // Replace with recipient's email
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery: ${query}`
        };

        // Send email using Mailgun
        mg.messages().send(mailOptions, (error, body) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ message: 'Failed to send email.' });
            } else {
                console.log('Email sent:', body);
                res.status(200).json({ message: 'Email sent successfully!' });
            }
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
};
