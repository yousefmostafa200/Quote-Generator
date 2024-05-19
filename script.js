'strict mode';

// Select Elements
const quoteContainerEL = document.getElementById('quote-container');
const quoteEL = document.getElementById('quote');
const authorEL = document.getElementById('author');
const newBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');

function getQuote() {
  // Choose a random quote from quotes array
  const quote = quotes[Math.trunc(Math.random() * quotes.length)];
  quoteEL.textContent = quote.text;

  //   Check if there is an author or not
  if (!quote.author) {
    authorEL.textContent = 'Unknown ';
  } else {
    authorEL.textContent = quote.author;
  }

  console.log(quote);
}

getQuote();

// Tweet Quote
function tweetQuote() {
  const twittUrl = `https://twitter.com/intent/tweet?text=${quoteEL.textContent}
  - ${authorEL.textContent}`;

  window.open(twittUrl, '_blank');
}

// Event Listeners

// New Quote
newBtn.addEventListener('click', getQuote);

// Tweet Quote
twitterBtn.addEventListener('click', tweetQuote);
