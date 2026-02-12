// script.js

// Page Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelector('.active').classList.remove('active');
        document.getElementById(targetId).classList.add('active');
    });
});

// Hidden Message Reveal
document.getElementById('reveal-button').addEventListener('click', () => {
    document.getElementById('hidden-message').style.display = 'block';
});

// Love Quiz
const quizAnswers = {q1: 'A', q2: 'B', q3: 'C'};
document.getElementById('quiz-submit').addEventListener('click', () => {
    let score = 0;
    [...document.querySelectorAll('.quiz-question')].forEach((question, index) => {
        const answer = question.querySelector('input:checked');
        if (answer && answer.value === quizAnswers[`q${index + 1}`]) {
            score++;
        }
    });
    alert(`Your score is ${score}/${Object.keys(quizAnswers).length}`);
});

// Color Game (example with basic logic)
const colors = ['red', 'blue', 'green', 'yellow'];
document.getElementById('color-game-submit').addEventListener('click', () => {
    const chosenColor = document.getElementById('color-input').value.toLowerCase();
    if (colors.includes(chosenColor)) {
        alert('You chose a valid color!');
    } else {
        alert('Invalid color. Try again!');
    }
});

// Song Game (fake song guessing mechanics)
const songs = ['happy', 'love', 'forever'];
document.getElementById('song-game-submit').addEventListener('click', () => {
    const songGuess = document.getElementById('song-input').value.toLowerCase();
    if (songs.includes(songGuess)) {
        alert('Correct! You guessed the song.');
    } else {
        alert('Wrong guess. Try again!');
    }
});

// Scratch Card Functionality (basic setup)
document.getElementById('scratch-card').addEventListener('click', () => {
    alert('You scratched the card! Surprise! 🎉');
});
