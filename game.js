
let points = 0;
let level = 1;
let timer = 30;
let clickSound = document.getElementById('click-sound');
let feedSound = document.getElementById('feed-sound');
let cleanSound = document.getElementById('clean-sound');
const pet = document.getElementById('pet');
const pointsDisplay = document.getElementById('points');
const levelDisplay = document.getElementById('level');
const timerDisplay = document.getElementById('timer');

// Timer logic
let gameInterval = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;

    if (timer <= 0) {
        clearInterval(gameInterval);
        alert('Time's up! You scored ' + points + ' points and reached level ' + level);
        // Reset game
        points = 0;
        level = 1;
        timer = 30;
        pointsDisplay.textContent = points;
        levelDisplay.textContent = level;
        timerDisplay.textContent = timer;
        gameInterval = setInterval(() => { timer--; timerDisplay.textContent = timer; }, 1000);
    }
}, 1000);

// Click event to increase points and progress levels
pet.addEventListener('click', () => {
    points++;
    clickSound.play();
    pointsDisplay.textContent = points;

    // Level up every 10 points
    if (points % 10 === 0) {
        level++;
        levelDisplay.textContent = level;
        pet.style.animationDuration = (2 - (level * 0.1)) + 's'; // Increase pet's floating speed
    }
});

// Feed button event
document.getElementById('feed-btn').addEventListener('click', () => {
    points += 5; // Bonus points for feeding
    pointsDisplay.textContent = points;
    feedSound.play();
});

// Clean button event
document.getElementById('clean-btn').addEventListener('click', () => {
    points += 3; // Bonus points for cleaning
    pointsDisplay.textContent = points;
    cleanSound.play();
});
