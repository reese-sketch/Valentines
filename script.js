// Page Navigation
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'block';
}

// Hidden Message
function showHiddenMessage() {
    const message = "You are loved!";
    alert(message);
}

// Love Quiz
function loveQuiz() {
    const answers = ['a', 'b', 'c']; // Example answers
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        const userAnswer = prompt(`Question ${i + 1}: What is your answer? (a/b/c)`);
        if (userAnswer === answers[i]) {
            score++;
        }
    }
    alert(`Your score is ${score}/${answers.length}`);
}

// Color Game
function colorGame() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const userColor = prompt(`Guess the color: ${colors.join(', ')}`);
    if (userColor === randomColor) {
        alert('Correct! You guessed the color!');
    } else {
        alert(`Wrong! The color was ${randomColor}.`);
    }
}

// Song Game
function songGame() {
    const songs = ['Love Song', 'Romantic Melody', 'Sweet Tune'];
    const userSong = prompt(`Which song do you like? ${songs.join(', ')}`);
    alert(`You selected: ${userSong}`);
}

// Scratch Card Functionality
function scratchCard() {
    const outcome = Math.random() < 0.5 ? "You won a prize!" : "Try again!";
    alert(outcome);
}

// Initialize Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('navigateButton').onclick = () => navigateTo('quizPage');
    document.getElementById('hiddenMessageButton').onclick = showHiddenMessage;
    document.getElementById('loveQuizButton').onclick = loveQuiz;
    document.getElementById('colorGameButton').onclick = colorGame;
    document.getElementById('songGameButton').onclick = songGame;
    document.getElementById('scratchCardButton').onclick = scratchCard;
});
