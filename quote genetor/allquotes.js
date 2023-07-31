const apiUrl = 'https://type.fit/api/quotes';

async function fetchAllQuotes() {
  try {
    const response = await fetch(apiUrl);
    const quotes = await response.json();
    return quotes;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return null;
  }
}

function displayAllQuotes(quotes) {
  const allquotesElement = document.getElementById('allquotes');

  // Clear any existing content in the container
  allquotesElement.innerHTML = '';

  quotes.forEach(quote => {
    const quoteElement = document.createElement('p');
    quoteElement.textContent = quote.text;
    allquotesElement.appendChild(quoteElement);

    // Create and append the <hr> tag after each quote
    const hrElement = document.createElement('hr');
    allquotesElement.appendChild(hrElement);
  });
}

function generateAllQuotes() {
  fetchAllQuotes()
    .then(quotes => {
      if (quotes) {
        displayAllQuotes(quotes);
      }
    })
    .catch(error => console.error('Error:', error));
}

generateAllQuotes();
