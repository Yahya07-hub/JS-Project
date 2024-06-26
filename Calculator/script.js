const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const calculateButton = document.querySelector('#calculate');

let currentInput = '';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentInput += number.textContent;
        updateDisplay();
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        currentInput += ` ${operator.textContent} `;
        updateDisplay();
    });
});

clearButton.addEventListener('click', () => {
    clearDisplay();
});

calculateButton.addEventListener('click', () => {
    calculate();
});

function updateDisplay() {
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}
