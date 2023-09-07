const glitchText = document.querySelector('.glitch-text');
const glitchWords = ['Glitch Text Animation', 'CSS Glitch Effect', 'HTML5 Animation'];

function randomizeText() {
    const randomIndex = Math.floor(Math.random() * glitchWords.length);
    glitchText.setAttribute('data-text', glitchWords[randomIndex]);
}

setInterval(randomizeText, 2000); // Change text every 2 seconds
