'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const resetGame = function () {
  score = 20;
  setScore(score);

  document.querySelector('.guess').value = '';
  setMessage('Start Guessing...');

  setNumber('?');
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
};

const winLogic = function () {
  setNumber(secretNumber);
  setMessage('🎉 Correct Number!');

  document.querySelector('body').style.backgroundColor = '#60b347';

  document.querySelector('.number').style.width = '30rem';

  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

const keepGuessingLogic = function (guess) {
  if (score > 1) {
    setMessage(
      guess < secretNumber ? 'Guess is too low!' : 'Guess is too high!'
    );
    score--;
    setScore(score);
  } else {
    setMessage('You lost the game!');
    setScore(0);
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    setMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    winLogic();
  } else if (guess !== secretNumber) {
    keepGuessingLogic(guess);
  }
});
document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});
