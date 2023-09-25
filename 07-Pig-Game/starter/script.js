'use strict';
/* varaiables */
const players = [
  {
    element: document.querySelector('.player--0'),
    current: document.getElementById('current--0'),
    total: document.getElementById('score--0'),
  },
  {
    element: document.querySelector('.player--1'),
    current: document.getElementById('current--1'),
    total: document.getElementById('score--1'),
  },
];
const img = document.querySelector('img');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
let currentScore = 0;
let currentPlayerIndex = 0;
/* Functions */
function randomizer() {  
  let randomDie = Math.trunc(Math.random() * 6);
  img.src = `dice-${randomDie+1}.png`
  return (randomDie += 1);
}
function winner(player) {
  player.element.classList.add('player--winner');
}
function switchPlayer(p1, p2) {
  p1.element.classList.add('player--active');
  p2.element.classList.remove('player--active');
}

function muteBtn() {
  rollBtn.disabled = true;
  holdBtn.disabled = true;
}

function reset() {
  currentScore = 0;
  for (const player of players) {
    player.total.textContent = 0;
    player.current.textContent = 0;
    player.element.classList.remove('player--winner');
  }
  rollBtn.disabled = false;
  holdBtn.disabled = false;
  currentPlayerIndex = 0;
  switchPlayer(players[0], players[1]);
}

function current() {
  let setRandom = randomizer();
  let currentPlayer = players[currentPlayerIndex];
  if (setRandom > 1) {
    currentScore += setRandom;
  } else if (setRandom === 1) {
    currentScore = 0;
    switchPlayer(players[1 - currentPlayerIndex], currentPlayer);
    currentPlayerIndex = 1 - currentPlayerIndex;
  }
  currentPlayer.current.textContent = currentScore;
}
function total() {

  let currentPlayer = players[currentPlayerIndex];
  let totalScore = Number(currentPlayer.total.textContent);
  totalScore += currentScore;
  console.log(totalScore);
  if (totalScore >= 100) {
    winner(currentPlayer);
    muteBtn();
  } else {
    switchPlayer(players[1 - currentPlayerIndex], currentPlayer);
    currentPlayerIndex = 1 - currentPlayerIndex;
  }
  currentScore = 0;
  currentPlayer.total.textContent = totalScore;
  currentPlayer.current.textContent = currentScore;
}
/* btn event listners */
rollBtn.addEventListener('click', current);
holdBtn.addEventListener('click', total);
newBtn.addEventListener('click', reset);