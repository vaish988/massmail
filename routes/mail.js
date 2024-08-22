const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); // Import nodemailer
const validator = require('validator');

router.post('/', (req, res) => {
    const { subject, message, recipients } = req.body;
    const emails = recipients.split(',').map(email => email.trim());
    const invalidEmails = [];

    // Validate each email
    emails.forEach(email => {
        if (!validator.isEmail(email)) {
            invalidEmails.push(email);
        }
    });

    if (invalidEmails.length > 0) {
        return res.status(400).send('The following emails are invalid: ' + invalidEmails.join(', '));
    }

    // Set up nodemailer transporter (using a test account for this example)
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Replace with your email provider (e.g., 'gmail')
        auth: {
            user: 'your-email@example.com', // Replace with your email
            pass: 'your-email-password' // Replace with your email password
        }
    });

    // Sending emails to all recipients
    emails.forEach(email => {
        const mailOptions = {
            from: 'your-email@example.com', // Replace with your email
            to: email,
            subject: subject,
            text: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error: ', error);
            }
            console.log('Email sent to: ' + email + ' | Info: ' + info.response);
        });
    });

    res.send('Emails sent successfully!');
});

module.exports = router;
