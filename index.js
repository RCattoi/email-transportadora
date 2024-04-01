const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: '*',
    // origin: ['http://localhost:3000,https://rcattoi.github.io/test-email'],
  })
);

app.use('/api', require('./routes/email'));

app.listen(PORT, () => {
  console.log(`it's alive ${PORT}`);
});
