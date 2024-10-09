const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MailtrapClient } = require('mailtrap');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  methods: ['GET', 'POST'],        // Allowed methods
  credentials: true
}));

// Mailtrap client setup
const TOKEN = "1fdc40a0461e991a6790a4d11502f23d"; // Mailtrap API token
const client = new MailtrapClient({ token: TOKEN });

// API route for newsletter subscription
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const sender = {
    email: "hello@demomailtrap.com",
    name: "Mailtrap Test",
  };

  const recipients = [
    {
      email: email,  // Recipient's email from request body
    }
  ];

  try {
    // Sending email using the Mailtrap client
    await client.bulk.send({
      from: sender,
      to: recipients,
      subject: 'Welcome to DEV@Deakin Newsletter!',
      text: 'Thank you for subscribing to our newsletter.',
      category: 'Newsletter Subscription',
    });

    res.status(200).json({ message: 'Welcome email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error sending email: ' + (error.response ? error.response.data : error.message) });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
