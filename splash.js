// splash.js
const randomTexts = [
    "technically online",
    "Powered by artificial intelligence!",
    "Runs on beer and cats!",
    "Astrophysicist technically!",
    "A total loser",
    "Certified sadboi!",
    "hacker, sort of",
    "Your minecraft boss!",
    "In love <3",
    "404 time not found",
    "stop blaming the Jews.",
    "iFunny=gayyyyyy",
    "Happy Chrimbus!",
    "string theory is wack fr",
    "will die by my own hand",
    "suicidal",
    "420 blaze it",
    "astrologers, just...idk",
    "I hate everyone",
    "medicated",
    "clinically depressed :(",
    "goddoesnotwearabuttplug",
    "actually not gay",
    "theif",
    "death to the bourgeoisie!",
    "power to the proletariat!",
    "Objectively cooler than you",
    "only 59 warnings and 19 errors!",
    "bruh.",
    "kick ass and chew bubblegum",
    "it's giving 'guillotine'",
];

document.addEventListener("DOMContentLoaded", function() {
    const splashElement = document.getElementById("splashtxt");
    if (splashElement) {
        splashElement.innerText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    }
});