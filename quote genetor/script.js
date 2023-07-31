const apiUrl = 'https://type.fit/api/quotes';

async function fetchRandomQuote() {
  try {
    const response = await fetch(apiUrl);
    const quotes = await response.json();
    console.log(quotes)
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return null;
  }
}

function displayQuote(quote) {
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = quote.text;
}

function generateRandomQuote() {
  fetchRandomQuote()
    .then(quote => {
      if (quote) {
        displayQuote(quote);
      }
    })
    .catch(error => console.error('Error:', error));
}

const generateButton = document.getElementById('generate-btn');
generateButton.addEventListener('click', generateRandomQuote);



// Generate a random quote on page load
generateRandomQuote();
