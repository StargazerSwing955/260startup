export function getQuote() {
    fetch('https://quote.cs260.click')
    .then((response) => response.json())
    .then((data) => {
    setQuote({text: data.quote, author: data.author});
    
    })
    .catch();
}


//don't think I need these 
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

//play functions
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
    //update it in the back end
    APIupdateCostume({"petName": petName, "sprite": costumes[index].bodySprite, "icon": costumes[index].headIcon})
    
    return {"petName": petName, "sprite": costumes[index].bodySprite, "icon": costumes[index].headIcon}
}

export const costumes = [ //given different names to avoid confusion
    {"name": "base", "bodySprite": "../public/pet_sprites/base_cat.png", "headIcon": "../public/pet_sprites/base_icon.png", "requiredScore": 0},
    {"name": "black", "bodySprite": "../public/pet_sprites/black_cat.png", "headIcon": "../public/pet_sprites/black_icon.png", "requiredScore": 100},
    {"name": "orange", "bodySprite": "../public/pet_sprites/orange_cat.png", "headIcon": "../public/pet_sprites/orange_icon.png", "requiredScore": 250},
    {"name": "tuxedo", "bodySprite": "../public/pet_sprites/tux_cat.png", "headIcon": "../public/pet_sprites/tux_icon.png", "requiredScore": 500},
    {"name": "calico", "bodySprite": "../public/pet_sprites/calico_cat.png", "headIcon": "../public/pet_sprites/calico_icon.png", "requiredScore": 750},
    {"name": "crown", "bodySprite": "../public/pet_sprites/crown_cat.png", "headIcon": "../public/pet_sprites/crown_icon.png", "requiredScore": 1000}
]



export function updateScore(score) {
    //when a certain amount of time has passed, add like 10 points
    score += 10

    //call function to update back end
    APIupdateScore(score);

    return score
}
export function randomScore( score) {
    const randomPoints = Math.floor(Math.random() * 10) + 1; // Random points between 1 and 10
    if (randomPoints <= 5) {
        score += randomPoints; // Add points to score
    } 
    //call function to update back end
    APIupdateScore(score);

    return score;
}


//still have no clue why it aint working
async function APIupdateScore(scoreToUpdate) {
 fetch('/api/data/score', {
        method: 'POST',
        body: JSON.stringify({scoreUpdate: scoreToUpdate }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
}

async function APIupdateCostume(costumeToUpdate) {
 fetch('/api/data/costume', {
        method: 'POST',
        body: JSON.stringify({costumeUpdate: costumeToUpdate }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
}