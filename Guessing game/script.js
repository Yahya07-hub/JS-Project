let targetNumber;
targetNumber = Math.floor(Math.random() * 100) + 1;
console.log(targetNumber)
let chancesInput = document.getElementById('chancesInput')
let guessInput = document.getElementById('guessInput');
let resetButton = document.getElementById('resetButton');
let guessButton = document.getElementById('guessButton');
let clearButton = document.getElementById('clearButton');
let message = document.getElementById('message');
guessInput.focus();
let attempts = 0;

guessButton.addEventListener('click', function () {
    let userGuess = parseInt(guessInput.value);
    let score = 100 - attempts;
    attempts++;
    chancesInput.value = attempts;

    if (userGuess === 0) {
        message.textContent = 'Guess Some Number'
        attempts = 0
        chancesInput.value = ''
    }
    else if (userGuess === targetNumber) {
        message.textContent = `Congratulations! You guessed the Correct Number '${targetNumber}' and your score is ${score}.`;
        message.style.color = 'green';
        guessInput.disabled = true;
        guessButton.disabled = true;
        clearButton.disabled = true;
        chancesInput.value = ''
    } else if (userGuess < targetNumber) {
        message.textContent = 'Try a higher number.';
        guessInput.focus()
    } else {
        message.textContent = 'Try a lower number.';
        guessInput.focus()
    }
});

clearButton.addEventListener('click', () => {
    guessInput.value = ''
    guessInput.focus()
})

resetButton.addEventListener('click', () => {
    let newNumber = targetNumber;
    guessInput.value = '';
    message.textContent = '';
    attempts = 0;
    chancesInput.value = attempts;
    guessInput.disabled = false;
    guessButton.disabled = false;
    clearButton.disabled = false;
    targetNumber = Math.floor(Math.random() * 100) + 1;
    console.log(targetNumber)
});