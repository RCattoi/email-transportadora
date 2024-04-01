const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = 3000;
app.use(express.json());

const corsOptions = { origin: true };
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`It's alive at: ${PORT}`);
});

app.post('/api/data', (req, res) => {
  const { to, subject, name, message, reply_to } = req.body;

  const USERID = process.env.USERID;
  emailjs.init(USERID);
  emailjs
    .send('service_dzoqy8o', 'template_2akyqfb', {
      to: to,
      subject: subject,
      name: name,
      message: message,
      reply_to: reply_to,
    })
    .then(function (response) {
      console.log('Email sent successfully:', response);
    })
    .catch(function (error) {
      console.error('Email sending failed:', error);
    });

  res.status(200).json({ message: data });
});
