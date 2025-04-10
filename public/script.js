const quotes = [
    "Believe in yourself and all that you are.",
    "You are capable of amazing things.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
  }
  