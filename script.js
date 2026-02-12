// script.js

// Function to reveal a hidden message when clicked
const revealMessage = () => {
    const message = document.getElementById('hidden-message');
    message.style.display = 'block';
    message.innerText = 'nice butt';
};

// Function to handle page transitions
const pageTransition = () => {
    // logic for transitioning between pages
    console.log('Page transition effect!');
};

// Function to handle game logic
const gameLogic = () => {
    // logic for the game
    console.log('Game logic here!');
};

// Function to create click animations
const clickAnimation = (element) => {
    element.classList.add('clicked');
    setTimeout(() => {
        element.classList.remove('clicked');
    }, 300);
};

// Event listener for the reveal message button
document.getElementById('reveal-button').addEventListener('click', () => {
    revealMessage();
    clickAnimation(event.target);
});

// Example of adding page transition listener
window.addEventListener('beforeunload', pageTransition);

// Initialize game logic
gameLogic();