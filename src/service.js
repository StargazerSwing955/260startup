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


export function setCostume(score, sprite, icon) {
    //iterate through an array with all the sprite and icon options(???)
    //check the score and send back if meets required value || end of array
    //setPetState()
}

export function updateScore(points) {
    //when a certain amount of time has passed, add like 10 points
    //setScore(score++)
}
