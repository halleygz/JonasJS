'use strict';
let random = Math.floor(Math.random() * 20) + 1;
const message = msg => (document.querySelector('.message').textContent = msg);
const score = sc => (document.querySelector('.score').textContent = sc);
let body = document.querySelector('body');
let s = 20;
let number = document.querySelector('.number');
let highscore = document.querySelector('.highscore');
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess < 1 || guess > 20) {
    message('⛔ Please enter a valid number!');
  } else if (guess !== random && s >= 1) {
    message(
      guess > random
        ? '📈 Your number is too high'
        : '📉 Your number is too low'
    );
    s--;
    score(s);
  } else if (guess === random && s >= 1) {
    number.textContent = guess;
    message('🎉🎉Hooray you guessed the correct number!');
    highscore.textContent =
      Number(highscore.textContent) >= s ? highscore.textContent : score(s);
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  } else {
    message('you lost the game');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  message('Start guessing...');
  document.querySelector('.guess').value = '';
  score.textContent = 20;
  s = 20;
  random = Math.floor(Math.random() * 20) + 1;
  console.log(random);
});
console.log(random);
