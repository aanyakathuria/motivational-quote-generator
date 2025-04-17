const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it."
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});