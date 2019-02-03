# number-guesser
DOM project 3 from Brad Traversy's Modern JavaScript From The Beginning course

Number Guessed app allows users to:
  * Guess a number between a min (1) and max (10)
    * Enter a guess number between the min and max
    * Submit the guess
    * Invalid input will print `Please enter a number between ${min} and ${max}` to the screen.
    * Correct guesses will print `${guess} is correct - YOU WIN!` to the screen.
       * The 'Submit' button will change to a 'Play Again' button, which will allow the player reload the game.
    * Incorrect guesses will print `${guess} is incorrec. You have ${guessesLeft} ${guessesLeft === 1 ? 'guess' : 'guesses'} left` to the screen.
    * If the player runs out of guesses, `Game over, you lost. The correct number was ${winningNum}.` will be printed to the screen.
      * The 'Submit' button will change to a 'Play Again' button, which will allow the player reload the game.
