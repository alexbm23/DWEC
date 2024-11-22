
let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Añadir event listener a cada botón
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const action = this.getAttribute('data-action');

        if (!isNaN(action)) {
            handleNumber(action);
        } else {
            handleOperation(action);
        }
        updateDisplay();
    });
});

// Función para manejar los números presionados
function handleNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
}

// Función para manejar las operaciones
function handleOperation(action) {
    switch(action) {
        case 'clear':
            currentInput = '';
            previousInput = '';
            operation = null;
            break;

        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            operation = action;
            previousInput = currentInput;
            currentInput = '';
            break;

        case 'equals':
            calculate();
            operation = null;
            break;

        case 'factorial':
            if (currentInput !== '') {
                currentInput = factorial(parseInt(currentInput)).toString();
            }
            break;

        case 'int-part':
            if (currentInput !== '') {
                currentInput = Math.floor(parseFloat(currentInput)).toString();
            }
            break;

        case 'decimal-part':
            if (currentInput !== '') {
                currentInput = (parseFloat(currentInput) % 1).toFixed(2).toString();
            }
            break;
    }
}

// Función para ejecutar la operación actual
function calculate() {
    let result;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(previous) || isNaN(current)) return;

    switch(operation) {
        case 'add':
            result = previous + current;
            break;
        case 'subtract':
            result = previous - current;
            break;
        case 'multiply':
            result = previous * current;
            break;
        case 'divide':
            result = previous / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    previousInput = '';
}

// Función para calcular el factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Función para actualizar el display
function updateDisplay() {
    if (currentInput === '') {
        display.value = '0';
    } else {
        display.value = currentInput;
    }
}
