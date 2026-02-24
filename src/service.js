export function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const quotes = [
  {"text": "I am learning.", "author":"h"},
  {"text": "I am learning more.", "author":"a"},
  {"text": "I am learning even more.", "author":"j"}
]


export function register(username, password) {
    localStorage.setItem("user", JSON.stringify({username, password}))
    return true
}

export function login(username, password) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
        return true;
    }
    return false;
}



