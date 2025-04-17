const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

const quotes = {
  smile: [
    "Smile, it's your superpower!",
    "Keep smiling, the world needs it.",
    "Your smile is contagious.",
    "Happiness looks great on you!",
    "Smile big, laugh often!",
    "A day without laughter is a day wasted.",
    "Let your smile change the world.",
    "Smiling resets your vibe.",
    "Find joy in the little things.",
    "Wear your joy like makeup."
  ],
  boost: [
    "You’ve got this!",
    "Push your limits today.",
    "Strength grows in the moments when you think you can’t go on but you keep going anyway.",
    "You are stronger than your doubts.",
    "Every challenge is an opportunity to grow.",
    "Don’t stop until you’re proud.",
    "You’re one step closer!",
    "Your grind will pay off.",
    "Make your future self proud.",
    "Be your own motivation."
  ],
  calm: [
    "Inhale peace, exhale stress.",
    "Calm is a superpower.",
    "Let stillness guide you.",
    "Breathe. Just breathe.",
    "The quieter you become, the more you hear.",
    "Peace begins with you.",
    "Your mind deserves rest too.",
    "You are enough, exactly as you are.",
    "Stay soft and strong.",
    "Let your soul breathe."
  ],
  encourage: [
    "You matter.",
    "Keep going, you're doing great.",
    "Your light is beautiful.",
    "The world needs your magic.",
    "You make a difference.",
    "Don't be afraid to shine.",
    "You’ve come so far, don’t stop now.",
    "Progress is still progress.",
    "You’re worthy of everything good.",
    "The best is yet to come."
  ]
};

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.get('/api/quote/:mood', (req, res) => {
  const mood = req.params.mood;
  if (quotes[mood]) {
    const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
    res.json({ quote: randomQuote });
  } else {
    res.status(400).json({ error: "Invalid mood type" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
