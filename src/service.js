export function getQuote() {
    fetch('https://quote.cs260.click')
    .then((response) => response.json())
    .then((data) => {
    setQuote({text: data.quote, author: data.author});
    
    })
    .catch();
}



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


export function changeCostume(score, sprite, icon, petName) {
    //iterate through an array with all the sprite and icon options(???)
    //check the score and send back if meets required value || end of array
    let index = costumes.findIndex(costume => costume.bodySprite === sprite && costume.headIcon === icon)
    if (index === costumes.length - 1 ||score < costumes[index+1].requiredScore ||  score === 0) {
        index = 0;
    }
    else{
        index++;
    }
    
    return {"petName": petName, "sprite": costumes[index].bodySprite, "icon": costumes[index].headIcon}
}

export const costumes = [ //given different names to avoid confusion
    {"name": "base", "bodySprite": "../pet_sprites/base_cat.png", "headIcon": "../pet_sprites/base_icon.png", "requiredScore": 0},
    {"name": "black", "bodySprite": "../pet_sprites/black_cat.png", "headIcon": "../pet_sprites/black_icon.png", "requiredScore": 100},
    {"name": "orange", "bodySprite": "../pet_sprites/orange_cat.png", "headIcon": "../pet_sprites/orange_icon.png", "requiredScore": 250},
    {"name": "tuxedo", "bodySprite": "../pet_sprites/tux_cat.png", "headIcon": "../pet_sprites/tux_icon.png", "requiredScore": 500},
    {"name": "calico", "bodySprite": "../pet_sprites/calico_cat.png", "headIcon": "../pet_sprites/calico_icon.png", "requiredScore": 750},
    {"name": "crown", "bodySprite": "../pet_sprites/crown_cat.png", "headIcon": "../pet_sprites/crown_icon.png", "requiredScore": 1000}
]

export function updateScore(score) {
    //when a certain amount of time has passed, add like 10 points
    score += 10
    return score
}
export function randomScore(score) {
    const randomPoints = Math.floor(Math.random() * 10) + 1; // Random points between 1 and 10
    if (randomPoints <= 5) {
        score += randomPoints; // Add points to score
    } 
    return score;
}
