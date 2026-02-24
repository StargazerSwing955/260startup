export function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const quotes = [
  "I am learning.",
  "I am learning more.",
  "I am learning even more."
]