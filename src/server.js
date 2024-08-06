// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 5174;

app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    await axios.post(`https://api.telegram.org/bot6582215174:AAH1G91eN51UAfhUnJrIjcCXcd4xtMeLsPw/sendMessage`, {
      chat_id: '-4216202259',
      text: `<b>Comment: ${message}</b>`,
      parse_mode: 'HTML'
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Error sending message' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
