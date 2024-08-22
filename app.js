const express = require('express');
const bodyParser = require('body-parser');
const mailRoutes = require('./routes/mail');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Set up view engine to render HTML
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Routes
app.use('/send-emails', mailRoutes);

// Render the form
app.get('/', (req, res) => {
    res.render('index.html');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
