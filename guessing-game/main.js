const answer = Math.floor(Math.random() * 25) + 1;

const $gameForm = document.getElementById('gameForm');

$gameForm.addEventListener('submit', handleGameForm);

function handleGameForm(event) {
  event.preventDefault();
  const guessVal = event.target.elements.guess.value;
  checkGuess(guessVal);
}

function checkGuess(guess) {
  if (guess > answer) {
    alert('Your guess was too high!');
  } else if (guess < answer) {
    alert('Your guess was too low!!');
  } else {
    alert('You Guessed correctly!!');
  }
}
