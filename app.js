/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessButton = document.getElementById('guess-button'),
  guessInput = document.getElementById('guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});


// Listen for guess
guessButton.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  } else {
    // Check if winning number
    if (guess === winningNum) {
      // Game over - won
      gameOver(true, `${guess} is correct – YOU WIN!`)

    } else {
      // Wrong guess
      guessesLeft -= 1;

      if (guessesLeft <= 0) {
        // Game over - lost
        gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
      } else {
        // Wrong guess - game continues
        // Change border color
        guessInput.style.borderColor = 'red';
        // Set message
        setMessage(`${guess} is incorrect. You have ${guessesLeft} ${guessesLeft === 1 ? 'guess' : 'guesses'} left`, 'red')
        // Clear input
        guessInput.value = ''
      }
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play Again?
  guessButton.value = 'Play Again';
  guessButton.className = 'play-again';
}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}