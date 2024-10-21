
let happiness = 100;
const happinessDisplay = document.getElementById('happiness');

function updateHappiness(amount) {
    happiness += amount;
    if (happiness > 100) happiness = 100;
    if (happiness < 0) happiness = 0;
    happinessDisplay.textContent = happiness;
}

function feed() {
    updateHappiness(10);
}

function play() {
    updateHappiness(15);
}

function clean() {
    updateHappiness(5);
}

// Decrease happiness over time
setInterval(() => {
    updateHappiness(-5);
}, 3000);
