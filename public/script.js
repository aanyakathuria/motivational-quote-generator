document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('generateBtn');
  const quoteText = document.querySelector('.quote-text');

  btn.addEventListener('click', async () => {
    try {
      // Fetch the quote from the server
      const response = await fetch('/api/quote');
      const data = await response.json();
      quoteText.textContent = data.quote; // Display the quote
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  });
});
