Mass Mail Dispatcher
Overview
The Mass Mail Dispatcher is a simple Node.js application that allows users to send mass emails to a list of recipients. This project demonstrates how to handle form submissions, validate email addresses, and send emails using nodemailer and Express. It includes both server-side and client-side components to provide a complete solution for mass mailing.

Features
Email Validation: Validates email addresses to ensure they are correctly formatted before sending.
Email Sending: Uses nodemailer to send emails to a list of recipients.
Form Submission: An HTML form for users to input the email subject, message, and recipient addresses.
Client-Side Validation: JavaScript validation to provide immediate feedback on invalid email addresses.
Project Structure
public/: Contains static assets such as CSS and JavaScript files.
css/styles.css: Styles for the HTML form.
js/validate.js: Client-side validation script for email addresses.
routes/: Contains route handlers for processing form submissions.
mail.js: Handles POST requests to send emails.
views/: Contains HTML templates.
index.html: The main form for sending emails.
app.js: The main server file that sets up Express and routes.
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/vaish988/massmaildispatcher.git
cd massmaildispatcher
Install Dependencies

Make sure you have Node.js and npm installed. Then, run:

bash
Copy code
npm install
Configure Email Settings

Update the nodemailer configuration in routes/mail.js with your email service provider's credentials.

javascript
Copy code
const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email provider
    auth: {
        user: 'your-email@example.com', // Replace with your email
        pass: 'your-email-password' // Replace with your email password
    }
});
Run the Application

Start the server with:

bash
Copy code
npm start
Navigate to http://localhost:3000 in your web browser to access the form and start sending emails.

Usage
Fill Out the Form: Enter the subject, message, and recipient email addresses in the form provided.
Submit the Form: Click the "Send Emails" button to send the email to the provided addresses.
View Results: The server will validate the email addresses and attem
