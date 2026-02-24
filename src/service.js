export function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const quotes = [
  {"text": "I am learning.", "author":"h"},
  {"text": "I am learning more.", "author":"a"},
  {"text": "I am learning even more.", "author":"j"}
]