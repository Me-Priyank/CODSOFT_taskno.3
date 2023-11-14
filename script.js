let displayValue = '';
let currentOperator = '';
let firstOperand = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    if (displayValue !== '') {
        currentOperator = operator;
        firstOperand = displayValue;
        displayValue = '';
        document.getElementById('display').value = '';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (displayValue !== '' && firstOperand !== '') {
        let result;
        const secondOperand = displayValue;

        switch (currentOperator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }

        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
        firstOperand = '';
        currentOperator = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    clearDisplay();
});
