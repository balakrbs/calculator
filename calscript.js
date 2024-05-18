document.addEventListener('DOMContentLoaded', function() {
    const buttons = [
        '<-', '.', '%', '*',
        '7', '8', '9', '/',
        '4', '5', '6', '-',
        '3', '2', '1', '+',
        '0', '00', 'C', '='
    ];

    const display = document.getElementById('display');
    const buttonContainer = document.getElementById('buttons');
    let currentInput = '';
    let memory = 0;

    // Create and append buttons
    buttons.forEach(text => {
        const button = document.createElement('button');
        button.className = 'btn btn-light border';
        button.textContent = text;
        button.addEventListener('click', () => handleButtonClick(text));
        buttonContainer.appendChild(button);
    });

    function handleButtonClick(value) {
        if (value === 'C') {
            currentInput = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                alert('Invalid expression');
                currentInput = '';
            }
        } else {
            currentInput += value;
        }
        updateDisplay();
    }

    function updateDisplay() {
        display.textContent = currentInput || '0';
    }

    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9' || e.key === '.') {
            currentInput += e.key;
            updateDisplay();
        } else {
            alert('Only numbers are allowed');
            e.preventDefault();
        }
    });
});