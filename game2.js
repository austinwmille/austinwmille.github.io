
let points = 0;
let level = 1;
let clickSound = document.getElementById('click-sound');
const pet = document.getElementById('pet');
const pointsDisplay = document.getElementById('points');
const levelDisplay = document.getElementById('level');

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
