'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// (addEventListener) and the (click) argument in it is used to make any click attribute work in browser...
// ----------------------------------------------------------

// To compare the guess number to user input, use JS Math function...
let guessNumber = Math.trunc(Math.random() * 20) + 1;
// now call the .class from HTML using querySelector
// document.querySelector('.number').textContent = guessNumber; (I am currently in the "when player wins section")

// Decreasing the score value anytime there is a wrong answer
let score = 20;
let highScore = 0;

const topMessage = function (bigMessage) {
  document.querySelector('.big-message').textContent = bigMessage;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const number4TextDisplay = function (number) {
  document.querySelector('.number').textContent = number;
};

const style4Background = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};

const style4Width = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //   Incase there is no input value use if/else or SWITCH.Whatever works best and the Exclamation mark (!) before the guess is used as (NO) i.e. NO guess

  //   When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === guessNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');

    // Changing TopMessage when player wins
    topMessage('🎉Correct Number!');

    // Currently hiding guessNumber value by being here but i display when player wins
    // document.querySelector('.number').textContent = guessNumber;
    number4TextDisplay(guessNumber);

    // document.querySelector('body').style.backgroundColor = '#60b347';
    style4Background('#60b347');
    // Always put the value in a string when trying to make any CSS changes
    // document.querySelector('.number').style.width = '30rem';
    style4Width('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== guessNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > guessNumber ? '📈 Too high!' : '📉 Too Low!';
      displayMessage(guess > guessNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😔 You lost the game!';
      displayMessage('😔 You lost the game!');
      document.querySelector('.score').textContent = 0;

      // Changing Top Message when player losses
      topMessage('😔 You lost the game!');
      //   Changing background color when player loses
      // document.querySelector('body').style.backgroundColor = 'red';
      style4Background('red');
    }
  }
  //   // When guess is too high
  // } else if (guess > guessNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     //   Changing background color when player loses
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }

  //   // When guess is too low
  // } else if (guess < guessNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😔 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     //   Changing background color when player loses
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

// Implementing a game reset functionality...
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  guessNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore initial score value
  document.querySelector('.score').textContent = score;

  // Restore number variable back to question mark
  document.querySelector('.number').textContent = '?';

  // Restore guesss input field
  document.querySelector('.guess').value = ' ';

  // Restore initial message back to (start guessing)
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  // Restore Initial Big-Message Input
  topMessage('Guess My Number!');

  //   Styling body back to original form on click
  // document.querySelector('body').style.backgroundColor = '#222';
  style4Background('#222');
  // document.querySelector('.number').style.width = '15rem';
  style4Width('15rem');
});
