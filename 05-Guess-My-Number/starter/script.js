'use strict';
let random = Math.floor(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let body = document.getElementById('body');
let score = document.querySelector('.score');
let s = 20;
let number = document.querySelector('.number');
let highscore = document.querySelector('.highscore');
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess < 1 || guess > 20) {
    message.textContent = '⛔ Please enter a valid number!';
  } else if (guess > random && s >= 1) {
    message.textContent = '📈 Your number is too high';
    s--;
    score.textContent = s;
  } else if (guess < random && s >= 1) {
    message.textContent = '📉 Your number is too low';
    s--;
    score.textContent = s;
  } else if (guess === random && s >= 1) {
    number.textContent = guess;
    message.textContent = '🎉🎉Hooray you guessed the correct number!';
    highscore.textContent =
      Number(highscore.textContent) >= Number(score.textContent)
        ? highscore.textContent
        : score.textContent;
    body.classList.add('bg');
  } else {
    message.textContent = 'you lost the game';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  body.classList.remove('bg');
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  score.textContent = 20;
  random = Math.floor(Math.random() * 20) + 1;
  console.log(random);
});
console.log(random);
