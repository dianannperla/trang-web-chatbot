const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome! This is the chatbot website.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});