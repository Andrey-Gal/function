const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

function updateDisplay() {
  display.value = currentInput;
}

function addInput(value) {
  const lastChar = currentInput.slice(-1);

  // Запрет двойных операторов
  if ('+-*/.'.includes(lastChar) && '+-*/.'.includes(value)) return;

  // Запрет второй точки в одном числе
  if (value === '.' && /(\d*\.\d*)$/.test(currentInput)) return;

  currentInput += value;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch {
    currentInput = '';
    display.value = 'Ошибка';
  }
}

function clearInput() {
  currentInput = '';
  updateDisplay();
}

// Клики по кнопкам
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      clearInput();
    } else if (value === '=') {
      calculate();
    } else {
      addInput(value);
    }
  });
});

// Поддержка клавиатуры
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if ('0123456789+-*/.'.includes(key)) {
    addInput(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape' || key === 'c') {
    clearInput();
  }
});
