
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equal');
const acButton = document.getElementById('ac');
const modButton = document.getElementById('mod');
const squareButton = document.getElementById('square');

let currentInput = ''; // to store the ongoing expression

// Append numbers when clicked
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.innerText;
        display.value = currentInput;
    });
});

// Append operator when clicked
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lastChar = currentInput.slice(-1);
        if (['+', '-', '*', '/', '%'].includes(lastChar)) return; // avoid double operators
        currentInput += button.innerText;
        display.value = currentInput;
    });
});

// AC button clears everything
acButton.addEventListener('click', () => {
    currentInput = '';
    display.value = '';
});

// Modulo button
modButton.addEventListener('click', () => {
    currentInput += '%';
    display.value = currentInput;
});

// Square button
squareButton.addEventListener('click', () => {
    if (currentInput !== '') {
        const value = parseFloat(currentInput);
        const squared = value * value;
        display.value = squared;
        currentInput = squared.toString();
    }
});

// Equal button evaluates the expression
equalButton.addEventListener('click', () => {
    try {
        // Evaluate expression safely
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
});