'use strict';

// Initialising content
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Resetting the Value
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let currentplayer = 0;
let scoreCount = [0, 0];
let holdScore = [0, 0];

// Initialising Buttons
const rollB = document.querySelector('.btn--roll');
const holdB = document.querySelector('.btn--hold');
const newB = document.querySelector('.btn--new');

// Adding Roll Dice functionality
rollB.addEventListener('click', function () {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  //console.log(diceRoll);
  dice.src = `dice-${diceRoll}.png`;
  dice.classList.remove('hidden');
  if (diceRoll !== 1) {
    let currentScore = document.getElementById(`current--${currentplayer}`);
    scoreCount[currentplayer] += diceRoll;
    currentScore.textContent = scoreCount[currentplayer];
  } else {
    if (currentplayer === 0) {
      player1.classList.add('player--active');
      player0.classList.remove('player--active');
      document.getElementById(`current--0`).textContent = 0;
      scoreCount[currentplayer] = 0;
      currentplayer = 1;
    } else {
      player0.classList.add('player--active');
      player1.classList.remove('player--active');
      document.getElementById(`current--1`).textContent = 0;
      scoreCount[currentplayer] = 0;
      currentplayer = 0;
    }
  }
});

// Adding Hold Button functionality
holdB.addEventListener('click', function () {
  if (currentplayer === 0) {
    holdScore[currentplayer] += scoreCount[currentplayer];
    score0.textContent = holdScore[currentplayer];
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
    scoreCount[currentplayer] = 0;
    document.getElementById(`current--0`).textContent = 0;
    currentplayer = 1;
  } else {
    holdScore[currentplayer] += scoreCount[currentplayer];
    score1.textContent = holdScore[currentplayer];
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    scoreCount[currentplayer] = 0;
    document.getElementById(`current--1`).textContent = 0;
    currentplayer = 0;
  }
  if (holdScore[0] >= 100)
    document.querySelector('.player--0').classList.add('player--winner');
  else if (holdScore[1] >= 100)
    document.querySelector('.player--1').classList.add('player--winner');
  dice.classList.add('hidden');
});

// Adding New Game Button functionality
newB.addEventListener('click', function () {
  dice.classList.add('hidden');
  currentplayer = 0;
  scoreCount = [0, 0];
  holdScore = [0, 0];
  score0.textContent = 0;
  score1.textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
});
